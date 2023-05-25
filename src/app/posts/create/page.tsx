"use client"
import React, {useState} from "react";
import {Button, Input, message, notification, Steps} from "antd";
import styles from "../../../styles/posts.module.css"
import {LoadingOutlined} from "@ant-design/icons";

export default function Home() {
    const [current, setCurrent] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const steps = [
        {
            title: 'Set title',
            content: <div>
                <Input key="title" size="large" placeholder="Title of the post" onChange={(e) => setTitle(e.target.value)}/>
            </div>
        },
        {
            title: 'Write text',
            content: <div>
                <Input key="description" size="large" placeholder="Write text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
        },
        {
            title: 'Submit',
            content: <div>
                <p>{title || ""}</p>
                <p>{description || ""}</p>
            </div>,
        },
    ];

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onSubmit = () => {
        notification.info({
            key: "publishPost",
            message: "Wait, please!",
            description: "We are publishing your post",
            placement: "top",
            duration: null,
            icon: <LoadingOutlined />,
            closeIcon: null,
        })

        try {
            //todo api route
        }
        catch(err) {
            notification.error({
                key: "publish error",
                message: "Error!",
                description: "Rejected publish",
                duration: 3,
                placement: "top"
            })
        }
        finally {
            setTimeout(() => {
                notification.destroy("publishPost")
            }, 3000)
        }

        setTimeout(() => {
            notification.success({
                key: "success publish",
                message: "Success!",
                description: "Post published",
                duration: 3,
                placement: "top",
                style: {
                    border: "3px solid green"
                },
                closeIcon: null
            })
        }, 3000)
    }

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (
        <div className={styles.writePost}>
            <Steps current={current} items={items}  />

            <div className={styles.writePostInput}>{steps[current].content}</div>

            <div className={styles.writePostButtons}>
                {current > 0 && (
                    <Button onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" style={{backgroundColor: "green"}} onClick={() => onSubmit()}>
                        Done
                    </Button>
                )}
            </div>
        </div>
    )
}
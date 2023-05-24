"use client"
import React, {useState} from "react";
import {Button, Input, message, Steps} from "antd";
import styles from "../../../styles/posts.module.css"

const steps = [
    {
        title: 'Set title',
        content: <div>
            <Input key="title" size="large" placeholder="Title of the post" />
        </div>
    },
    {
        title: 'Write text',
        content: <div>
            <Input key="description" size="large" placeholder="Write text" />
        </div>
    },
    {
        title: 'Submit',
        content: <div>
            <p>Title text</p>
            <p>text description</p>
        </div>,
    },
];

export default function Home() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

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
                    <Button type="primary" style={{backgroundColor: "green"}} onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
            </div>
        </div>
    )
}
"use client"
import styles from "../../../styles/posts.module.css"
import {Button, Col, Divider, Row} from "antd";
import {PostView} from "@/components/posts/PostView";
import {CommentOutlined, DislikeOutlined, LikeOutlined, UserOutlined} from "@ant-design/icons";
import React, {useState} from "react";

export default function ViewPost({params}) {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const onLike = () => {
        setLike(like + 1)
    }

    const onDislike = () => {
        setDislike(dislike + 1)
    }

    return (
        <div className={styles.viewPost}>
            <div className={styles.viewPostTitle}>
                <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            </div>
            <Row className={styles.viewPostRow}>
                <Col span={16}>
                    <PostView />
                </Col>
                <Col span={8} className={styles.viewPostComments}>
                    <h1>Comments</h1>
                    <p>coming soon...</p>
                </Col>
            </Row>
            <div className={styles.viewPostInfo}>
                <div className={styles.viewPostInfoBlock}>
                    <UserOutlined />
                    <h1>perezvonish</h1>
                </div>

                <div className={styles.postFooterInfo}>
                    <div className={styles.viewPostInfoBlock}>
                        <Button onClick={(e) => onLike()}>
                            <p>{like}</p>
                            <LikeOutlined style={{color: "green"}}/>
                        </Button>
                    </div>
                    <div className={styles.viewPostInfoBlock}>
                        <Button onClick={(e) => onDislike()}>
                            <p>{dislike}</p>
                            <DislikeOutlined style={{color: "red"}}/>
                        </Button>
                    </div>
                </div>
            </div>



        </div>
    )
}
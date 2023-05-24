"use client"
import styles from "../../../styles/posts.module.css"
import {Col, Divider, Row} from "antd";
import {PostView} from "@/components/posts/PostView";
import {CommentOutlined, DislikeOutlined, LikeOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

export default function ViewPost({params}) {
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
                        <p>130</p>
                        <LikeOutlined style={{color: "green"}}/>
                    </div>
                    <div className={styles.viewPostInfoBlock}>
                        <p>65</p>
                        <DislikeOutlined style={{color: "red"}}/>
                    </div>
                    <div className={styles.viewPostInfoBlock}>
                        <p>73</p>
                        <CommentOutlined />
                    </div>
                </div>
            </div>



        </div>
    )
}
"use client"

import React from "react";
import styles from "../../styles/posts.module.css"
import {Button, Divider} from "antd";
import {CommentOutlined, DislikeOutlined, LikeOutlined, UserOutlined, WarningOutlined} from "@ant-design/icons";

export const Post: React.FC = () => {
    return (
        <div className={styles.post}>
            <Divider orientation="left">Title</Divider>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa dolores, eaque est id ipsa minus reiciendis rem sapiente similique?
            </p>
            <div className={styles.postFooter}>
                <div className={styles.postFooterInfo}>
                    <div>
                        <p>130</p>
                        <LikeOutlined style={{color: "green"}}/>
                    </div>
                    <div>
                        <p>65</p>
                        <DislikeOutlined style={{color: "red"}}/>
                    </div>
                    <div>
                        <p>73</p>
                        <CommentOutlined />
                    </div>
                </div>
                <div className={styles.postFooterInfo}>
                    <div>
                        <UserOutlined />
                        <p>perezvonish</p>
                    </div>
                </div>

            </div>
            <div className={styles.postFooterRead}>
                <Button type="primary" size="small">
                    Read more..
                </Button>
            </div>
            <Divider />
        </div>
    )
}
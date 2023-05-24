"use client"
import styles from "../../../styles/posts.module.css"
import {Col, Divider, Row} from "antd";
import {PostView} from "@/components/posts/PostView";

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
                <Col span={8} style={{border: "5px solid black"}}>
                    <h1>Comments</h1>
                </Col>
            </Row>
        </div>
    )
}
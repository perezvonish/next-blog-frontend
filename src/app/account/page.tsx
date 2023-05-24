"use client"

import React from "react";
import styles from "../../styles/account.module.css"
import {Button} from "antd";

export default function Home() {
    return (
        <div className={styles.accountView}>
            <div className={styles.accountViewInfo}>
                <h1>Username</h1>
                <h1>first name</h1>
                <h1>second name</h1>
            </div>

            <div className={styles.accountViewFunctions}>
                <h1>Functions</h1>
                <Button type="primary" danger>
                    Delete account
                </Button>
            </div>
        </div>
    )
}
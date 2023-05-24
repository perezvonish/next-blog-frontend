import React from "react";

import styles from "../../../styles/layout.module.css"
import {Button} from "antd";

export const LayoutHeader: React.FC = () => {
    return (
        <div id={styles.LayoutHeader}>
            <Button type="primary">Account</Button>
            <Button type="primary" danger>Logout</Button>
        </div>
    )
}
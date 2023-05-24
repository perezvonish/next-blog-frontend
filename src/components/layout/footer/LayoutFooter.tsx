import styles from "../../../styles/layout.module.css"
import React from "react";
import {GithubOutlined, LinkedinOutlined} from "@ant-design/icons";

type DevInfoItem = {
    key: React.Key
    title: string,
    icon: React.ReactNode
}

function getDevInfoItem(key: React.Key, title: string, icon: React.ReactNode): DevInfoItem {
    return {
        key,
        title,
        icon
    } as DevInfoItem
}

export const LayoutFooter: React.FC = () => {
    const devInfo = [
        getDevInfoItem("https://github.com/perezvonish", "Github", <GithubOutlined />),
        getDevInfoItem("https://github.com/perezvonish", "LinkedIn", <LinkedinOutlined />),
        getDevInfoItem("https://github.com/perezvonish", "Github",  <GithubOutlined />),
        getDevInfoItem("https://github.com/perezvonish", "Github",  <GithubOutlined />),
    ]

    return (
        <div className={styles.layoutFooter}>
            <div>
                <h1>
                    Repository of the project
                </h1>
            </div>

            <div>
                {devInfo.map(item => (
                    <div className={styles.layoutFooterDevInfo}>
                        <div>
                            {item.icon}
                        </div>
                        <div>
                            <h1>{item.title}</h1>
                            <h2>{item.description}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
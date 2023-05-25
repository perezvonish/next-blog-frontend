"use client"
import '../styles/globals.css'
import {Inter} from 'next/font/google'
import {Button, Layout, Menu, MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {LayoutFooter} from "@/components/layout/footer/LayoutFooter";
const inter = Inter({ subsets: ['latin'] })
import layoutStyles from '../styles/layout.module.css'
import styles from '../styles/page.module.css'

import React, {useState} from "react";
import {
    EditOutlined,
    FolderOutlined,
    FormOutlined, InfoCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SnippetsOutlined,
    UserOutlined
} from "@ant-design/icons";
import {LayoutHeader} from "@/components/layout/header/LayoutHeader";
import {usePathname, useRouter} from "next/navigation";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items = [
    getItem("Posts", "posts", <FolderOutlined />, [
        getItem("View posts", "/", <SnippetsOutlined />),
        getItem("Create post", "/posts/create", <FormOutlined />)
    ]),
    getItem("Account", "account", <UserOutlined /> , [
        getItem("View account", "/account", <InfoCircleOutlined />),
        getItem("Edit account", "/account/edit", <EditOutlined />),
    ]),
];

export default function RootLayout({children}) {
    const router = useRouter()
    const selectedMenu = usePathname()

    const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
              <div>
                  <Menu mode="inline" defaultSelectedKeys="view posts" theme="dark" items={items} onSelect={({key}) => router.push(key)} />
              </div>
          </Sider>
          <Layout>
              <Header key="1" id={layoutStyles.header}>
                  <Button
                      type="text"
                      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                          fontSize: '16px',
                          width: 64,
                          height: 64,
                      }}
                  />
                  <LayoutHeader />
              </Header>
              <Content className={styles.main}>{children}</Content>
              <LayoutFooter />
          </Layout>
      </Layout>
      </body>
    </html>
  )
}

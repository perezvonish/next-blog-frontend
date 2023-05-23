"use client"
import '../styles/globals.css'
import {Inter} from 'next/font/google'
import {Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
          <Sider>Sider</Sider>
          <Layout>
              <Header>Header</Header>
              <Content>{children}</Content>
              <Footer>Footer</Footer>
          </Layout>
      </Layout>
      </body>
    </html>
  )
}

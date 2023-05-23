"use client"
import '../styles/globals.css'
import {Inter} from 'next/font/google'
import {Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Navigation} from "@/components/layout/navigation/Navigation";
import {LayoutFooter} from "@/components/layout/footer/LayoutFooter";
import {LayoutHeader} from "@/components/layout/header/LayoutHeader";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
          <Sider>
              <Navigation />
          </Sider>
          <Layout>
              <Header>
                  <LayoutHeader />
              </Header>
              <Content>{children}</Content>
              <Footer>
                  <LayoutFooter />
              </Footer>
          </Layout>
      </Layout>
      </body>
    </html>
  )
}

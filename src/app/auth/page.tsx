"use client"
import {Tabs} from "antd";
import {LoginForm} from "@/components/auth/LoginForm";
import {RegisterForm} from "@/components/auth/RegisterForm";
import React from "react";

export default function Home() {
    return (
        <div>
            <Tabs items={[
                {
                    key: '1',
                    label: `Login`,
                    children: <LoginForm />,
                },
                {
                    key: '2',
                    label: `Register`,
                    children: <RegisterForm />,
                },
            ]} />
        </div>
    )
}
"use client"
import React from "react";
import {Tabs} from "antd";
import {LoginForm} from "@/components/auth/LoginForm";
import {RegisterForm} from "@/components/auth/RegisterForm";

export const AuthPage: React.FC = () => {
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
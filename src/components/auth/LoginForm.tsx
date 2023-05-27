import {Button, Form, Input, notification} from "antd";
import React from "react";
import {AuthLogin, AuthToken} from "@/api/dto/auth.dto";

import * as Api from "@/api"
import {LoadingOutlined} from "@ant-design/icons";
import {setCookie} from "nookies";

export const LoginForm: React.FC = () => {
    const onSubmit = async (data: AuthLogin) => {
        let response: AuthToken
        notification.info({
            key: "login",
            message: "Wait, please!",
            description: "We are logging in your account.",
            placement: "top",
            duration: null,
            icon: <LoadingOutlined />,
            closeIcon: null,
        })

        try {
            response = await Api.auth.login(data)
        }
        catch (err) {
            notification.error({
                key: "login error",
                message: "Error!",
                description: "Rejected login",
                duration: 3,
                placement: "top"
            })
        }
        finally {
            notification.destroy("login")
        }

        setCookie(null, "token", response.token)

        if (response.token) {
            notification.success({
                key: "success login",
                message: "Success!",
                description: <span>Welcome back, <b>{data.username}</b>!</span>,
                duration: 3,
                placement: "top",
                style: {
                    border: "3px solid green"
                },
            })
        }
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            {/*<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>*/}
            {/*    <Checkbox>Remember me</Checkbox>*/}
            {/*</Form.Item>*/}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
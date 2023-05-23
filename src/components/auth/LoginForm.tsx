import {Button, Checkbox, Form, Input, notification} from "antd";
import React from "react";
import {AuthLogin} from "@/api/dto/auth.dto";

import * as Api from "@/api"

export const LoginForm: React.FC = () => {
    const onSubmit = async (data: AuthLogin) => {
        try {
            const {token} = Api.auth.login(data)
        }
        catch (err) {
            notification.error({
                message: "Error!",
                description: <span>Rejected login, <b>{data.username}</b>!</span>,
                duration: 3,
                placement: "top"
            })
        }

        notification.success({
            message: "Success!",
            description: <span>Welcome back, <b>{data.username}</b>!</span>,
            duration: 3,
            placement: "top"
        })
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
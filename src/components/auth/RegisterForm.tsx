import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {IdcardOutlined} from "@ant-design/icons";

export const RegisterForm: React.FC =() => {
    const onSubmit = (data) => {

    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label= "Username"
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

            <Form.Item
                label="Repeat password"
                name="repeatPassword"
                rules={[{ required: true, message: 'Please input password repeat!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label= "First name"
                name="firstName"
                rules={[{ message: 'Please input your first name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label= "Second name"
                name="secondName"
                rules={[{ message: 'Please input your second name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}
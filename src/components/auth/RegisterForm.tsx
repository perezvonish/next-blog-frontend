import React from "react";
import {Button, Form, Input, notification} from "antd";
import {AuthRegister} from "@/api/dto/auth.dto";
import {LoadingOutlined} from "@ant-design/icons";
import * as Api from "@/api";

export const RegisterForm: React.FC =() => {
    let response;

    const onSubmit = async (data: AuthRegister) => {
        notification.info({
            key: "register",
            message: "Wait, please!",
            description: "We are registering your account.",
            placement: "top",
            duration: null,
            icon: <LoadingOutlined />,
            closeIcon: null,
        })

        try {
            response = await Api.auth.register(data)
        }
        catch (err) {
            notification.error({
                key: "registration error",
                message: "Error!",
                description: "Rejected registration",
                duration: 3,
                placement: "top"
            })
        }
        finally {
            notification.destroy("register")
        }

        if (response) {
            notification.success({
                key: "success register",
                message: "Success!",
                description: <span>Account registered!</span>,
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
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
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
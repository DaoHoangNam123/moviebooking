import React from "react";
import { Form, Input, message } from "antd";
import { userService } from "../../../services/userService";
import { localStorageService } from "../../../services/localStorageService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "./../../../redux/action/userAction";
export default function FormLogin() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userService
      .postDangNhap(values)
      .then((res) => {
        localStorageService.setUserInfor(res.data.content);
        message.success("Login success");
        dispatch(setUserInfoAction(res.data.content));
        setInterval(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        message.error(err.response.data.content, 5);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className="text-4xl font-light mb-0">Login</h1>
      <Form.Item
        label="Tài khoản"
        name="taiKhoan"
        className="mb-0"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="text-center mt-5">
        <button id="login-button" className="w-full mx-auto" htmlType="submit">
          Login
        </button>
        <div className="flex items-center justify-center mt-2">
          <p className="mb-0 mx-2">Don't have an account yet?</p>
          <a
            onClick={() => {
              navigate("/register");
            }}
          >
            Register now
          </a>
        </div>
      </div>
    </Form>
  );
}

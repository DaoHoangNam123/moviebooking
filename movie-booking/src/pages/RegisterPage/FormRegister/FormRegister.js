import { Form, Input, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../services/userService";
import {
  GET_INFO,
  SHOW_MESSAGE,
} from "./../../../redux/constant/registerConstant";
export default function FormRegister() {
  let messageList = useSelector((state) => state.registerReducer.messageList);
  let user = useSelector((state) => state.registerReducer.userInfo);
  let validUser = useSelector((state) => state.registerReducer.validUser);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let registerUser = (userInfo) => {
    userService
      .postDangKy(userInfo)
      .then((res) => {
        message.success("Đăng ký thành công");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        dispatch({
          type: SHOW_MESSAGE,
          payload: "",
        });
        if (messageList.email === "" && messageList.id === "") {
          message.error(err.response.data.content);
        }
      });
  };
  return (
    <div>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 6 }}
        autoComplete="off"
      >
        <h1 className="text-4xl font-light mb-0">Register Account</h1>
        <Form.Item label="Tài khoản" name="taiKhoan" className="mb-2" required>
          <Input
            name="id"
            onChange={(event) => {
              dispatch({
                type: GET_INFO,
                payload: event,
              });
            }}
            value={user.id}
          />
          <span className={messageList.id ? "block text-red-500" : "hidden"}>
            {messageList.id}
          </span>
        </Form.Item>
        <Form.Item label="Mật khẩu" className="mb-2" name="matKhau" required>
          <Input.Password
            style={{ width: "100%" }}
            onChange={(event) => {
              dispatch({
                type: GET_INFO,
                payload: event,
              });
            }}
            name="password"
            value={user.password}
          />
          <span
            className={messageList.password ? "block text-red-500" : "hidden"}
          >
            {messageList.password}
          </span>
        </Form.Item>
        <Form.Item label="Họ tên" className="mb-2" name="hoTen" required>
          <Input
            name="name"
            onChange={(event) => {
              dispatch({
                type: GET_INFO,
                payload: event,
              });
            }}
            value={user.name}
          />
          <span className={messageList.name ? "block text-red-500" : "hidden"}>
            {messageList.name}
          </span>
        </Form.Item>
        <Form.Item label="Số điện thoại" className="mb-2" required name="phone">
          <Input
            style={{ width: "100%" }}
            onChange={(event) => {
              dispatch({
                type: GET_INFO,
                payload: event,
              });
            }}
            name="phone"
            value={user.phone}
          />
          <span className={messageList.phone ? "block text-red-500" : "hidden"}>
            {messageList.phone}
          </span>
        </Form.Item>
        <Form.Item label="Email" className="mb-2" required name="email">
          <Input
            onChange={(event) => {
              dispatch({
                type: GET_INFO,
                payload: event,
              });
            }}
            name="email"
            value={user.email}
          />
          <span className={messageList.email ? "block text-red-500" : "hidden"}>
            {messageList.email}
          </span>
        </Form.Item>

        <div className="text-center mt-5">
          <button
            id="login-button"
            className="w-full mx-auto"
            htmlType="submit"
            onClick={() => {
              registerUser(validUser);
            }}
          >
            Register
          </button>
          <div className="flex items-center justify-center mt-2">
            <p className="mb-0 mx-2">Already have an account?</p>
            <a href="/login">Login now</a>
          </div>
        </div>
      </Form>
    </div>
  );
}

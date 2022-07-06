import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";

export const userService = {
  postDangNhap: (dataLogin) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      data: dataLogin,
      headers: { TokenCybersoft: TOKEN_CYBERSOFT },
    });
  },
  getUserList: () => {
    return axios.get(`${BASE_URL}/api/QuanLyNguoiDung/LayDanhSachNguoiDung`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  postDangKy: (dataRegister) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
      data: dataRegister,
      headers: { TokenCybersoft: TOKEN_CYBERSOFT },
    });
  },
};

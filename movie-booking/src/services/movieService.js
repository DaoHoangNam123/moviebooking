import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";
import { localStorageService } from "./localStorageService";

export const movieService = {
  getMovieList: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getMovieByTheater: () => {
    return axios.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP07`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getDetailMovie: (maPhim) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getBannerList: () => {
    return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`, {
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getMovieTime: (maPhim) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  getTicketList: (maVe) => {
    return axios.get(
      `${BASE_URL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maVe}`,
      {
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      }
    );
  },
  postTicket: (dataTicket) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyDatVe/DatVe`,
      data: dataTicket,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization:
          "Bearer " + localStorageService.getUserInfo()?.accessToken,
      },
    });
  },
};

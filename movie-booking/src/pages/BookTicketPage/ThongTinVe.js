import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { CONFIRM_BOOK_TICKET } from "./../../redux/constant/constant";
import { localStorageService } from "../../services/localStorageService";
import { useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";

export default function ThongTinVe() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let bookedTicket = useSelector(
    (state) => state.bookTicketReducer.bookedTicket
  );
  let ticket = useSelector((state) => state.bookTicketReducer.ticketData);
  let ticketList = useSelector((state) => state.bookTicketReducer.ticketList);
  let total = bookedTicket?.reduce((tong, ticket) => {
    return (tong += ticket.giaVe);
  }, 0);
  let confirmTicket = (ticketListData) => {
    let userInfo = localStorageService.getUserInfo();
    if (!userInfo) {
      swal({
        title: "Bạn chưa đăng nhập?",
        text: "Bạn có muốn đăng nhập không?",
        icon: "error",
        buttons: ["Không", "Đăng nhập"],
      }).then((dangNhap) => {
        if (dangNhap) {
          navigate("/login");
        } else {
          navigate("/");
        }
      });
    } else {
      if (bookedTicket.length === 0) {
        swal({
          title: "Đặt vé thất bại",
          text: "Mời bạn chọn ghế",
          icon: "error",
          button: "Đồng ý",
        });
      } else {
        swal({
          title: "Xác nhận đặt vé",
          text: "Bạn xác nhận đặt vé?",
          icon: "warning",
          buttons: ["Không", "Xác nhận"],
        }).then((willConfirm) => {
          if (willConfirm) {
            movieService
              .postTicket(ticketListData)
              .then((res) => {
                dispatch({
                  type: CONFIRM_BOOK_TICKET,
                  payload: "",
                });
                swal({
                  title: "Đặt vé thành công",
                  text: "Kiểm tra trong lịch sử đặt vé",
                  icon: "success",
                  button: "Đồng ý",
                });
              })
              .catch((err) => {
                swal({
                  title: "Đặt vé thất bại",
                  text: err.response.data.content,
                  icon: "error",
                  button: "Đồng ý",
                });
              });
          }
        });
      }
    }
  };

  return (
    <div className="h-full mt-20 px-5">
      <table className="table-auto w-full h-1/3 shadow-lg">
        <thead>
          <tr className="border-b-2 h-24 ">
            <td className="text-green-500 text-2xl font-bold justify-center w-full">
              {total ? total + " VND" : "0 VND"}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 h-20">
            <td className="flex justify-center items-center h-full">
              <span className="w-1/3 font-bold text-base text-left px-5">
                Cụm Rạp:
              </span>
              <span className="w-2/3 text-right px-2 text-green-500">
                {" "}
                {ticket.tenCumRap}
              </span>
            </td>
          </tr>
          <tr className="border-b-2 h-20 ">
            <td className="flex justify-center items-center h-full">
              <span className="w-1/3 font-bold text-base text-left px-5">
                Địa chỉ
              </span>
              <span className="w-2/3 text-right px-2 text-green-500">
                {" "}
                {ticket.diaChi}
              </span>
            </td>
          </tr>
          <tr className="border-b-2 h-20 ">
            <td className="flex justify-center items-center h-full">
              <span className="w-1/3 font-bold text-base text-left px-5">
                Rạp:
              </span>
              <span className="w-2/3 text-right px-2 text-green-500">
                {" "}
                {ticket.tenRap}
              </span>
            </td>
          </tr>
          <tr className="border-b-2 h-20 ">
            <td className="flex justify-center items-center h-full">
              <span className="w-1/3 font-bold text-base text-left px-5">
                Ngày giờ chiếu:
              </span>
              <span className="w-2/3 text-right px-2 text-green-500">
                {" "}
                {ticket.ngayChieu} ~ {ticket.gioChieu}
              </span>
            </td>
          </tr>
          <tr className="border-b-2 h-20 ">
            <td className="flex justify-center items-center h-full">
              <span className="inline-block w-1/3 font-bold text-base text-left px-5">
                Tên phim:
              </span>
              <span className="w-2/3 text-right px-2 text-green-500">
                {" "}
                {ticket.tenPhim}
              </span>
            </td>
          </tr>

          <tr className="border-b-2 h-20">
            <td className="flex justify-center items-center h-full">
              <span className="w-1/3 font-bold text-base text-left px-5">
                Chọn:
              </span>
              <div className="w-2/3  text-right px-2 text-green-500">
                {bookedTicket?.map((ticket) => {
                  return <span> Ghế {ticket.tenGhe}, </span>;
                })}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="py-5 px-2 mb-5 rounded bg-red-500 w-full text-white font-bold text-xl"
        onClick={() => {
          confirmTicket(ticketList);
        }}
      >
        Đặt vé
      </button>
    </div>
  );
}

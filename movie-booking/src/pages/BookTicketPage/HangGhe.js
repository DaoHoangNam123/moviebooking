import React, { Component } from "react";
import { connect } from "react-redux";
import { CHOOSE_SEAT } from "./../../redux/constant/bookTicketConstant";

class HangGhe extends Component {
  render() {
    return (
      <div>
        <table className="mx-auto my-10">
          <tbody>
            <tr className="grid md:grid-cols-10 grid-cols-7 justify-center gap-2 lg:gap-5">
              {this.props.seatList.danhSachGhe?.map((ghe) => {
                return (
                  <td
                    className={
                      ghe.status
                        ? ghe.status
                        : ghe.daDat
                        ? "gheDaDat"
                        : ghe.loaiGhe === "Thuong"
                        ? "gheThuong"
                        : "gheVip"
                    }
                    onClick={() => {
                      this.props.handleChooseSeat(ghe);
                    }}
                  >
                    {ghe.daDat ? "X" : ghe.stt}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-10">
          <div className="mx-10">
            <div
              className="gheThuong"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            ></div>
            <h3>Ghế thường</h3>
          </div>
          <div className="mx-10">
            <div
              className="gheVip"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            ></div>
            <h3>Ghế VIP</h3>
          </div>
          <div className="mx-10">
            <div
              className="gheDaDat"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              X
            </div>
            <h3>Ghế đã đặt</h3>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleChooseSeat: (item) => {
      dispatch({
        type: CHOOSE_SEAT,
        payload: item,
      });
    },
  };
};
let mapStateToProps = (state) => {
  return {
    seatList: state.bookTicketReducer.seatData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { SET_TICKET_DATA } from "../../redux/constant/bookTicketConstant";
import {
  SET_SPINNER_END,
  SET_SPINNER_STARTED,
} from "../../redux/constant/spinnerConstant";
import { movieService } from "../../services/movieService";
import "../../assets/css/BookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTinVe from "./ThongTinVe";
export default function TicketPage() {
  let dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch({
      type: SET_SPINNER_STARTED,
      payload: "",
    });
    movieService
      .getTicketList(id)
      .then((res) => {
        dispatch({
          type: SET_TICKET_DATA,
          payload: res.data.content,
        });
        dispatch({
          type: SET_SPINNER_END,
          payload: "",
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_SPINNER_END,
          payload: "",
        });
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="lg:flex lg:flex-row flex-col">
        <div className="lg:w-2/3 w-full">
          <p className="font-bold mt-5">SCREEN</p>
          <div className="screen m-auto w-3/4"></div>
          <HangGhe />
        </div>
        <div className="lg:w-1/3 md:w-2/3 w-full mx-auto">
          <ThongTinVe />
        </div>
      </div>
    </div>
  );
}

import {
  CONFIRM_BOOK_TICKET,
  CHOOSE_SEAT,
  SET_TICKET_DATA,
} from "../constant/bookTicketConstant";
let initialState = {
  seatData: {},
  bookedTicket: [],
  ticketData: [],
  ticketList: {},
};
let findSeatIndex = (item, list) => {
  let seatIndex = list.danhSachGhe.findIndex((seat) => {
    return seat.maGhe === item.maGhe;
  });
  return seatIndex;
};
let bookedTicketData = (bookedTicket, movieInfo) => {
  let ticketList = [];
  bookedTicket.forEach((ticket) => {
    ticketList.push({
      maGhe: ticket.maGhe,
      giaVe: ticket.giaVe,
    });
  });
  let ticketDataAPI = {
    maLichChieu: movieInfo.maLichChieu,
    danhSachVe: ticketList,
  };
  return ticketDataAPI;
};

export const bookTicketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TICKET_DATA: {
      state.seatData = payload;
      state.ticketData = payload.thongTinPhim;
      return { ...state };
    }
    case CONFIRM_BOOK_TICKET: {
      let cloneSeatData = { ...state.seatData };
      let cloneBookTicket = [...state.bookedTicket];
      cloneBookTicket.forEach((ticket) => {
        let seat = findSeatIndex(ticket, cloneSeatData);
        ticket.daDat = true;
        cloneSeatData.danhSachGhe[seat] = { ...ticket };
      });
      cloneBookTicket = [];
      state.seatData = cloneSeatData;
      state.bookedTicket = cloneBookTicket;
      return { ...state };
    }
    case CHOOSE_SEAT: {
      let cloneSeatData = { ...state.seatData };
      let cloneBookTicket = [...state.bookedTicket];
      let cloneTicketList = { ...state.ticketList };
      let seat = findSeatIndex(payload, cloneSeatData);
      if (payload.daDat === false) {
        if (payload.status) {
          cloneSeatData.danhSachGhe[seat] = {
            ...payload,
            status: false,
          };
          let bookTicketIndex = cloneBookTicket.findIndex((seat) => {
            return seat === payload;
          });
          cloneBookTicket.splice(bookTicketIndex, 1);
        } else {
          cloneSeatData.danhSachGhe[seat] = {
            ...payload,
            status: "gheDangChon",
          };
          cloneBookTicket.push(payload);
        }
      }
      cloneTicketList = bookedTicketData(
        cloneBookTicket,
        cloneSeatData.thongTinPhim
      );
      state.seatData = cloneSeatData;
      state.bookedTicket = cloneBookTicket;
      state.ticketList = cloneTicketList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

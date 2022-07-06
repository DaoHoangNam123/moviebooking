import { CLOSE_TRAILER, GET_TRAILER_ID } from "../constant/homePageContants";

let initialState = {
  trailerID: "",
  isOpen: false,
};
export const homePageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRAILER_ID: {
      let ID = payload.substring(payload.length - 11, payload.length);
      state.trailerID = ID;
      state.isOpen = true;
      return { ...state };
    }
    case CLOSE_TRAILER: {
      state.isOpen = false;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

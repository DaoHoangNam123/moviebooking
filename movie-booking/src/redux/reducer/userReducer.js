import { localStorageService } from "../../services/localStorageService";
import { SET_USER_INFOR } from "../constant/userConstant";

let initialState = {
  userInfo: localStorageService.getUserInfo(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFOR: {
      state.userInfo = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

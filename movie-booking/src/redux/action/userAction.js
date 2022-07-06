import { SET_USER_INFOR } from "../constant/userConstant";

export const setUserInfoAction = (user) => {
  return {
    type: SET_USER_INFOR,
    payload: user,
  };
};

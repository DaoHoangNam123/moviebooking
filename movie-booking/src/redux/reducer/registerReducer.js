import { GET_INFO, SHOW_MESSAGE } from "./../constant/registerConstant";
const EMAIL_PATTERN =
  /^([a-zA-Z0-9]+)([_.-])?([a-zA-Z0-9]+)@([a-zA-Z]+)([.])([a-zA-Z.]+)$/;
const PASSWORD_PATTERN =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,10}$/;
let initialState = {
  userInfo: {
    id: "",
    name: "",
    password: "",
    phone: "",
    email: "",
  },
  message: {
    id: "Please enter your username",
    name: "Please enter your name",
    password: "Please enter your password",
    phone: "Please enter your phone",
    email: "Please enter your email",
  },
  messageList: {},
  validUser: {},
};

let validation = (user, messageList) => {
  let result = { valid: false, message: [] };
  if (user.id === "") {
    messageList.id = "Please enter your username";
  } else if (user.id.includes(" ")) {
    messageList.id = "Username can not has space";
  } else {
    messageList.id = "";
  }

  if (user.name === "") {
    messageList.name = "Please enter your name";
  } else {
    messageList.name = "";
  }

  if (user.password === "") {
    messageList.password = "Please enter your password";
  } else if (!user.password.match(PASSWORD_PATTERN)) {
    if (user.password.length < 6) {
      messageList.password = "Password must be at least 6 letters";
    } else {
      messageList.password =
        "Password must contains lowercase letter, uppercase letter, number and special character";
    }
  } else {
    messageList.password = "";
  }

  if (user.phone === "") {
    messageList.phone = "Please enter your phone";
  } else if (isNaN(user.phone)) {
    messageList.phone = "Phone must be number";
  } else {
    messageList.phone = "";
  }

  if (user.email === "") {
    messageList.email = "Please enter your email";
  } else if (!user.email.match(EMAIL_PATTERN)) {
    messageList.email = "Invalid email";
  } else {
    messageList.email = "";
  }
  if (
    messageList.id === "" &&
    messageList.name === "" &&
    messageList.password === "" &&
    messageList.phone === "" &&
    messageList.email === ""
  ) {
    result.valid = true;
  }
  result.message = messageList;
  return result;
};
export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INFO: {
      let cloneMessage = { ...state.message };
      let cloneValidUser = { ...state.validUser };
      let name = payload.target.name;
      let value = payload.target.value;
      let cloneUserInfo = { ...state.userInfo, [name]: value };
      console.log(cloneUserInfo);
      console.log(cloneMessage);
      let result = validation(cloneUserInfo, cloneMessage);
      if (result.valid) {
        cloneValidUser = {
          taiKhoan: cloneUserInfo.id,
          matKhau: cloneUserInfo.password,
          email: cloneUserInfo.email,
          soDt: cloneUserInfo.phone,
          maNhom: "GP01",
          hoTen: cloneUserInfo.name,
        };
      }
      state.message = result.message;
      state.validUser = cloneValidUser;
      state.userInfo = cloneUserInfo;
      return { ...state };
    }
    case SHOW_MESSAGE: {
      let cloneMessage = { ...state.message };
      state.messageList = cloneMessage;
      return { ...state };
    }
    default:
      return state;
  }
};

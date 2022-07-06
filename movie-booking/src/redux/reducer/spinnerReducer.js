import {
  SET_SPINNER_STARTED,
  SET_SPINNER_END,
} from "../constant/spinnerConstant";

let initialState = {
  isLoading: false,
};

export const spinnerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SPINNER_STARTED: {
      state.isLoading = true;
      return { ...state };
    }
    case SET_SPINNER_END: {
      state.isLoading = false;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

import { combineReducers, createStore } from "redux";
import { userReducer } from "./userReducer";
import { bookTicketReducer } from "./bookTicketReducer";
import { homePageReducer } from "./homePageReducer";
import { registerReducer } from "./registerReducer";
import { spinnerReducer } from "./spinnerReducer";

export const rootReducer = combineReducers({
  userReducer,
  bookTicketReducer,
  homePageReducer,
  registerReducer,
  spinnerReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

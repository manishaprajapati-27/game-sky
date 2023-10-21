import { combineReducers } from "redux";
import gameReducers from "./gameReducers";
import detailReducer from "./detailReducer";

// const initState = {
//   names: "",
//   isLogged: false,
// };

const userReducers = (state = initState, action) => {
  switch (action.type) {
    // case "FETCH_GAMES":
    //   return { ...state };
    default:
      return { ...state };
  }
};

const rootReducers = combineReducers({
  games: gameReducers,
  details: detailReducer,
  // user: userReducers,
});

export default rootReducers;

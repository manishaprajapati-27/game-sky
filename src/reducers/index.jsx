import { combineReducers } from "redux";
import GameReducers from "./GameReducers";

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
  games: GameReducers,
  // user: userReducers,
});

export default rootReducers;

import axios from "axios";
import { popularGamesURL } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  // Fetch Axios
  dispatch({
    type: "FTECH_GAMES",
    payload: {
      popular: popularData,
    },
  });

  //   In then catch
  // axios.get(popularGamesURL())
  // .then(date=>{
  //     // Code
  // })
};

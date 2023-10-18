// import React from 'react'

const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

const GameReducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

// Action
// {
//   type: "FETCH_GAMES";
// }

// dispatch({ type: "FETCH_GAMES" });

// Action Creators

const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

// fetchGames();
// {
// }

export default GameReducers;

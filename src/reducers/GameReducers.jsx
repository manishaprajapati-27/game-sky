// import React from 'react'

const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

const gameReducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upComing,
        newGames: action.payload.newGames,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
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

// const fetchGames = (userData) => {
//   return {
//     type: "FETCH_GAMES",
//     payload: userData,
//   };
// };

// fetchGames();
// {
// }

export default gameReducers;

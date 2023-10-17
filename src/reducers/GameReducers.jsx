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
      return { ...state };
    default:
      return { ...state };
  }
};

export default GameReducers;

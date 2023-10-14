// import React from 'react'

// const initState ={
//     popular = [],
//     newGames=[],
//     upComing=[]
// }

const GameReducers = (state = initState, reducers) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

// export default GameReducers

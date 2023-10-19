import React from "react";
import { useEffect } from "react";
// Components
import Game from "../components/Game";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  //   Get that data back
  //   const games = useSelector((state) => state.games);
  const { popular, upComing, newGames } = useSelector((state) => state.games);
  //   console.log(games);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upComing.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 50px;
  h2 {
    padding: 30px 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

export default Home;

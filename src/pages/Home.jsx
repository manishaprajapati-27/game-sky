import React from "react";
import { useEffect } from "react";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
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
    <>
      <GameList>
        {/* <GameDetail /> */}
        <h2 className="heading">Upcoming Games</h2>
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
      <GameList>
        <h2 className="heading">New Games</h2>
        <Games>
          {newGames.map((game) => (
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
      <GameList>
        <h2 className="heading">Popular Games</h2>
        <Games>
          {popular.map((game) => (
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
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 40px 50px;
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

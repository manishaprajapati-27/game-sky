import React from "react";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image }) => {
  return (
    <StyledGame>
      <div className="text">
        <h3>{name}</h3>
        <h5>{released}</h5>
      </div>
      <div className="image">
        <img src={image} alt={name} />
      </div>
    </StyledGame>
    //     <div>
    //     <h3>Game</h3>
    //     <h5>Date Released</h5>
    //   </div>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 300px;
  box-shadow: 0 0 25px 2px #2727274c;
  border-radius: 7px;
  overflow: hidden;
  .text {
    padding: 5px 0;
    text-align: center;
  }
  .image {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default Game;

import React from "react";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="text">
        <p>{id}</p>
        <h3>{name}</h3>
        <p>{released}</p>
      </div>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 300px;
  box-shadow: 0 0 25px 2px #2727274c;
  border-radius: 7px;
  background: #18191a;
  overflow: hidden;
  cursor: pointer;

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

  .text {
    padding: 20px;
    text-align: center;
    width: 80%;
    margin: auto;

    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #fff;
      font-weight: 500;
      line-height: 150%;
    }
  }
`;

export default Game;

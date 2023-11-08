import React from "react";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { zoomIn } from "../animation";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  // Load detail handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
    console.log(typeof id);
  };
  return (
    <StyledGame
      variants={zoomIn}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <div className="image">
          <motion.img
            layoutId={`image ${stringPathId}`}
            src={smallImage(image, 600, 400)}
            alt={name}
          />
        </div>
        <div className="text">
          {/* <p>{id}</p> */}
          <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
          <p>
            Release Date: <span>{released}</span>
          </p>
        </div>
      </Link>
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
    width: 100%;

    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #fff;
      font-weight: 500;
      line-height: 150%;
    }
    p {
      color: #979da0;
      span {
        color: #ffffff;
      }
    }
  }
`;

export default Game;

import React from "react";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  // Data
  const { game, screen } = useSelector((state) => state.details);
  //   console.log(details);
  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt="Image" />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img src={screen.image} key={screen.id} alt="Game" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;

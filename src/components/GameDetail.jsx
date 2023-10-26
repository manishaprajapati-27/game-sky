import React from "react";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  const navigate = useNavigate();
  // Exit Handler
  const exitDetailHandler = (e) => {
    const element = e.target;
    // console.log(element);
    if (element.classList.contains("popup-card")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  // Data
  const { game, screen, isLoading } = useSelector((state) => state.details);
  //   console.log(details);
  return (
    <>
      {!isLoading && (
        <CardShadow className="popup-card" onClick={exitDetailHandler}>
          <div className="detail">
            <div className="game-info">
              <div className="stats">
                <div className="rating">
                  <h2>{game.name}</h2>
                  <p>Rating: {game.rating}</p>
                </div>
                <div className="info">
                  <h3>Platforms</h3>
                  <div className="platforms">
                    {game.platforms.map((data) => (
                      <h5 key={data.platform.id}>{data.platform.name}</h5>
                    ))}
                  </div>
                </div>
              </div>

              <div className="media">
                {/* <img src={game.background_image} alt="Image" /> */}
                <img
                  src={smallImage(game.background_image, 600, 400)}
                  alt="Image"
                />
              </div>
            </div>
            <div className="description">
              <p>{game.description_raw}</p>
            </div>
            <div className="gallery-info">
              <h2 className="heading">Gallery</h2>
              <div className="gallery">
                {screen.results.map((screen) => (
                  <img src={screen.image} key={screen.id} alt="Game" />
                  // <img
                  //   src={smallImage(screen.image, 200)}
                  //   key={screen.id}
                  //   alt="Game"
                  // />
                ))}
              </div>
            </div>
          </div>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;

  .detail {
    width: 80%;
    padding: 55px;
    background: #2d3031;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 100%;
    }

    .game-info {
      display: flex;
      gap: 30px;

      .stats {
        .rating {
          margin-bottom: 30px;

          h2 {
            font-size: 50px;
            color: #fff;
            line-height: 130%;
            font-weight: bold;
            font-family: "El Messiri", sans-serif;
          }
        }
        .info {
          h3 {
            font-size: 25px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 15px;
            line-height: 110%;
          }
          .platforms {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 30px;
            h5 {
              font-size: 18px;
              color: #f6fcff;
              font-weight: 400;
              line-height: 110%;
            }
          }
        }
      }
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  }
`;

export default GameDetail;

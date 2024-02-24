import React from "react";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
import { FaStar, FaRegStar } from "react-icons/fa";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  console.log(typeof pathId);
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

  // Get Platform icons
  // const getPlatfrom = (platform) => {
  //   switch (platform) {
  //     case "Linux":
  //       return;
  //   }
  // };

  // Get Star icons
  const getStar = () => {
    const star = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<FaStar />);
      } else {
        star.push(<FaRegStar />);
      }
    }
    return star;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="popup-card" onClick={exitDetailHandler}>
          <motion.div className="detail" layoutId={pathId}>
            <div className="game-info">
              <div className="stats">
                <div className="rating">
                  <motion.h2 layoutId={`title ${pathId}`}>
                    {game.name}
                  </motion.h2>
                  <p>
                    Rating: ({game.rating}) <span>{getStar()}</span>
                  </p>
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
                <motion.img
                  layoutId={`image ${pathId}`}
                  src={smallImage(game.background_image, 600, 400)}
                  alt="Image"
                />
              </div>
            </div>
            <div className="description">
              <h3>About</h3>
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
          </motion.div>
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
  z-index: 10;
  top: 0;
  left: 0;
  background: #121313a0;

  .detail {
    width: 80%;
    padding: 55px;
    background: #2d3031;
    border-radius: 10px;
    position: absolute;
    z-index: 20;
    top: 0;
    left: 10%;
    margin: 20px 0;

    @media (max-width: 720px) {
      width: 80%;
      padding: 15px;
    }

    img {
      width: 100%;
    }

    .game-info {
      width: 100%;
      display: flex;
      gap: 30px;
      margin-bottom: 40px;

      @media (max-width: 720px) {
        flex-direction: column;
      }

      .stats {
        width: 50%;
        @media (max-width: 720px) {
          width: 100%;
        }
        .rating {
          margin-bottom: 35px;

          h2 {
            font-size: 50px;
            color: #fff;
            line-height: 130%;
            font-weight: bold;
            font-family: "El Messiri", sans-serif;

            @media (max-width: 720px) {
              font-size: 25px;
            }
          }

          p {
            display: flex;
            align-items: center;

            span {
              margin-left: 10px;
            }
          }

          svg {
            color: #eecf1f;
            margin-right: 4px;
          }
        }
        .info {
          h3 {
            font-size: 25px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 15px;
            line-height: 110%;
            font-family: "El Messiri", sans-serif;
          }
          .platforms {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 30px;

            h5 {
              font-size: 16px;
              color: #f6fcff;
              font-weight: 400;
              line-height: 110%;
              border-bottom: 1px solid #858585;
            }
          }
        }
      }

      .media {
        width: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 7px;
        }
      }
    }
    .description {
      margin-bottom: 40px;
      h3 {
        font-size: 35px;
        color: #f6fcff;
        font-weight: 400;
        line-height: 110%;
        margin-bottom: 10px;
        font-family: "El Messiri", sans-serif;
      }
    }
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: 720px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    img {
      border-radius: 7px;
    }
  }
`;

export default GameDetail;

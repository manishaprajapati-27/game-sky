import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
// Styles & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";

// Redux
import { fetchSearch } from "../actions/gameAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <div to="/" className="logo" onClick={clearSearch}>
        <h2>
          Game<span>Sky</span>
        </h2>
        <h6>Find All Games</h6>
      </div>
      <form className="search">
        <input
          onChange={inputHandler}
          value={textInput}
          type="search"
          placeholder="Search Game"
        />
        <button onClick={submitSearch} type="submit">
          <FiSearch />
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
  }

  .logo {
    cursor: pointer;
    h2 {
      font-size: 55px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
      font-family: "El Messiri", sans-serif;
      span {
        color: #0fa1e6;
      }
      @media (max-width: 720px) {
        font-size: 45px;
      }
    }
    h6 {
      font-size: 20px;
      color: #0fa1e6;
      font-weight: 400;
      text-transform: uppercase;
      text-align: end;
      font-style: italic;
      /* font-family: "El Messiri", sans-serif; */
    }
  }
  .search {
    display: flex;
    align-items: center;
    input {
      border: 0;
      outline: 0;
      background: #2d3031;
      font-size: 16px;
      color: #f6fcff;
      padding: 10px 15px;
      border: 1px solid #2d3031;
      height: 100%;
      width: 450px;
      border-radius: 7px 0 0 7px;

      @media (max-width: 920px) {
        width: 100%;
      }

      &:focus {
        border-color: #0fa1e6;
      }
    }
    button {
      background: #0fa1e6;
      border: 0;
      outline: 0;
      font-size: 16px;
      color: #f6fcff;
      padding: 10px 15px;
      height: 100%;
      border-radius: 0 7px 7px 0;
      cursor: pointer;
      transition: 0.5s all ease;

      &:hover {
        background: #fff;
        color: #010a0e;
      }
    }
  }
`;

export default Nav;

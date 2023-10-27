import React from "react";
import { Route, Routes } from "react-router-dom";
// Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

// Styles
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

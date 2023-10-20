import React from "react";
// Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <>
      <div>
        <GlobalStyles />
        <Home />
      </div>
    </>
  );
};

export default App;

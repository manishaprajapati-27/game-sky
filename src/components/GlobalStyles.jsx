import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-color: v.$primary transparent;
  scrollbar-width: thin;
}
*::selection {
  background: v.$primary;
  color: v.$light;
}
::-webkit-scrollbar {
  width: 5px;
  background: v.$dark;
}
::-webkit-scrollbar-thumb {
  background: v.$primary;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: v.$sans-serif;
  background: v.$dark;
  overflow-x: hidden;
  position: relative;
}
h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
b,
i,
u,
ul,
ol,
li,
span {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  line-height: 100%;
}

p {
  a {
    color: v.$light-alt;
    transition: 0.4s all ease;

    &:hover {
      color: v.$primary;
      text-decoration: none;
    }
  }
}

img,
video {
  width: 100%;
}

p {
  font-size: 16px;
  font-weight: 300;
  color: v.$light-alt;
  line-height: 140%;
  letter-spacing: 0.4px;
}
`;

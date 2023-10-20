import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */

/* $primary: #0fa1e6;
$secondary: #f59c16;
$light: #ffffff;
$light-alt: #f6fcff;
$dark: #010a0e;
$dark-alt: #2d3031; */

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-color: #0fa1e6 transparent;
  scrollbar-width: thin;
}
*::selection {
  background: #0fa1e6;
  color: #ffffff;
}
::-webkit-scrollbar {
  width: 5px;
  background: #010a0e;
}
::-webkit-scrollbar-thumb {
  background: #0fa1e6;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: #010a0e;
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
    color: #f6fcff;
    transition: 0.4s all ease;

    &:hover {
      color: #0fa1e6;
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
  color: #f6fcff;
  line-height: 140%;
  letter-spacing: 0.4px;
}

.heading{
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  font-family: 'El Messiri', sans-serif;;
}
`;

export default GlobalStyles;

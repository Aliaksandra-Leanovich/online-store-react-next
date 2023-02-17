import { css } from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"),
      url("../assets/static/fonts/Gilroy/Gilroy-Regular.woff2")
        format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy"),
      url("../assets/static/fonts/Gilroy/Gilroy-Bold.woff2") format("truetype");
  }
  @font-face {
    font-family: "Open Sans";
    src: local("Open Sans"),
      url("../assets/static/fonts/OpenSans/OpenSans-Regular.woff2")
        format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
      url("../assets/static/fonts/Roboto/Roboto-Regular.woff2")
        format("truetype");
    font-style: normal;
  }

  html,
  body {
    font-family: "Gilroy";
    height: 100%;
    width: 100%;
  }
  html {
    scroll-behavior: smooth;
  }

  body {
    line-height: 1.5;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  a,
  button,
  textarea {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
    outline: none;
  }

  ul,
  ol {
    list-style: none;
  }

  input {
    border: none;
  }
`;

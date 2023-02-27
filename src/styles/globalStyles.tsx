import { ComponentSelector, css, CSSObject, Keyframes, SerializedStyles } from '@emotion/react';
import { ArrayCSSInterpolation } from '@emotion/serialize';

export const globalStyles = css`
  @font-face {
    font-family: 'ProximaNova-Bold';
    src: url('/fonts/ProximaNova-Bold.woff') format('woff');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
  html,
  body {
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

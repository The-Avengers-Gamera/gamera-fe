import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root,
  .App {
    height: 100%;
  }

  body.lock-scroll {
    height: 100vh;
    overflow: hidden;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

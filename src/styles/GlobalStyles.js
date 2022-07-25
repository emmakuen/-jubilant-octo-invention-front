import { Global, css } from "@emotion/react";
import theme from "./theme";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        * {
          padding: 0;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          color: ${theme.textColor};
        }

        img {
          display: block;
          max-width: 100%;
          overflow: hidden;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-weight: 600;
        }

        button,
        input[type="text"],
        a {
          border-radius: ${theme.borderRadius};
        }

        input[type="radio"] {
          clip: rect(0 0 0 0);
          clip-path: inset(100%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }

        a {
          color: inherit;
          text-decoration: inherit;
          outline: none;
        }

        a:focus-visible,
        button:focus-visible {
          outline: ${theme.borderColorFocused} 2px solid;
        }

        input[type="text"]::placeholder {
          color: ${theme.textSecondaryColor};
        }

        hr {
          border: none;
          border-top: 1px solid ${theme.borderColor};
          margin: 4rem 0;
        }

        #root {
          min-width: 412px;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          overflow-wrap: break-word;
        }

        dialog {
          position: relative;
          border: none;
          padding-left: calc(${theme.avatarSize} + ${theme.gridColumnGap});
          width: 100%;
        }

        .sr-only:not(:focus):not(:active) {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      `}
    ></Global>
  );
};

export default GlobalStyles;

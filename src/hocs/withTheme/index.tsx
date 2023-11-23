import { Global, ThemeProvider, css } from "@emotion/react";
import { normalize } from "polished";

import { theme } from "styles/theme";

export const withTheme: React.HOC = (Component) => {
  return (props) => {
    return (
      <>
        <Global
          styles={css`
            ${normalize()}
            body {
              font-size: 14px;
              font-family: "Rounded Mplus 1c", sans-serif;
              color: #3c4f82;
            }
          `}
        />
        <ThemeProvider theme={theme}>
          <Component {...props} />
        </ThemeProvider>
      </>
    );
  };
};

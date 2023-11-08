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
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji";
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

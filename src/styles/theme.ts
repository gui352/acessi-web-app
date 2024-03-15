export const theme = {
  name: "default",
  spacing: {
    xs: "0.5em",
    sm: "1.0em",
    md: "1.5em",
    lg: "2.5em",
    xl: "4.0em",
  },
  color: {
    primary: {
      bg: "#096dd9",
      text: "white",
      bluePrimary: "#3C4F82",
      // blue-text: "#3C4F82",
    },
    dark: {
      bg: "#FFFFFF",
      text: "white",
      highlight: {
        bg: "#096dd9",
        text: "white",
      },
    },
    normal: {
      bg: "#f0f2f5",
      text: "black",
    },
    light: {
      bg: "white",
      text: "black",
      highlight: {
        bg: "#e6f7ff",
        text: "#1890ff",
      },
    },
  },
  typography: {
    h1: {
      size: "2em",
      weight: "bold",
    },
    h2: {
      size: "1.25em",
      weight: "normal",
    },
  },
} as const;

import styled from "@emotion/styled";

export const Container = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`;

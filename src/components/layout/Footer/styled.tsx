import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

  background-color: ${({ theme }) => theme.color.normal.bg};
  color: ${({ theme }) => theme.color.normal.text};

  text-align: center;
`;

import styled from "@emotion/styled";

export const SubForm = styled.div<{ columns?: number }>`
  display: grid;

  ${({ columns }) =>
    columns ? `grid-template-columns: repeat(${columns}, 1fr);` : ""}

  gap: ${({ theme }) => theme.spacing.sm};

  align-items: center;
`;

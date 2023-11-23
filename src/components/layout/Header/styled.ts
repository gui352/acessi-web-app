import styled from "@emotion/styled";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;

  height: 64px;

  padding: 0 ${({ theme }) => theme.spacing.lg};

  background-color: ${({ theme }) => theme.color.dark.bg};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;

  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  height: 100%;
  /* padding: 0 ${({ theme }) => theme.spacing.lg}; */

  color: ${({ theme }) => theme.color.dark.text};
`;

export const Title = styled.h1`
  margin: 0 ${({ theme }) => theme.spacing.lg};

  font-size: ${({ theme }) => theme.typography.h2.size};
  font-weight: ${({ theme }) => theme.typography.h2.weight};

  color: ${({ theme }) => theme.color.dark.text};
`;

export const UserCardWrapper = styled.div`
  display: grid;

  height: 100%;

  padding: 0 ${({ theme }) => theme.spacing.md};

  align-items: center;

  background-color: ${({ theme }) => theme.color.primary.bg};
  color: ${({ theme }) => theme.color.primary.text};

  cursor: pointer;
`;

export const LanguageChangerWrapper = styled.div`
  display: grid;

  padding: 0 ${({ theme }) => theme.spacing.md};

  align-items: center;

  & > div > div {
    background-color: white;
  }
`;

import styled from "@emotion/styled";
// import { Layout } from "antd";

import { Header } from "../Header";
import { Sider } from "../Sider";

export const Wrapper = styled("div")`
  display: grid;

  height: 100vh;

  grid-template-columns: auto 1fr;
  grid-template-rows: auto 0fr;
  grid-template-areas: "sider content";
`;

export const ContentWrapper = styled.main`
  grid-area: content;

  display: grid;
  grid-template-rows: 1fr auto;

  background-color: ${({ theme }) => theme.color.normal.bg};
  color: ${({ theme }) => theme.color.normal.text};

  padding: ${({ theme }) => theme.spacing.md};
  padding-bottom: 0;

  overflow-x: auto;

  & > div {
    background-color: ${({ theme }) => theme.color.light.bg};
    color: ${({ theme }) => theme.color.light.text};
    border-radius: 10px;

    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const PlacedHeader = styled(Header)`
  grid-area: header;
`;
export const PlacedSider = styled(Sider)`
  grid-area: sider;
`;

export const SpinnerWrapper = styled.div`
  display: grid;

  width: 100%;
  height: 100%;

  justify-items: center;
  align-items: center;
`;

import * as React from "react";

import { Spin } from "antd";

import { Footer } from "../Footer";

import * as Styled from "./styled";
import { FixedButtons } from "../FixedButtons";

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.PlacedHeader />
      <Styled.PlacedSider />
      <Styled.ContentWrapper>
        <React.Suspense
          fallback={
            <Styled.SpinnerWrapper>
              <Spin />
            </Styled.SpinnerWrapper>
          }
        >
          <div>{children}</div>
        </React.Suspense>
        <Footer />
        <FixedButtons />
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

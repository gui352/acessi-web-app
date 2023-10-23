import * as React from "react";

import { Spin } from "antd";

import { Footer } from "../Footer";

import * as Styled from "./styled";

interface PropsBaseLayout {
  children: any;
}

export const BaseLayout: React.FC = ({ children }: PropsBaseLayout) => {
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
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

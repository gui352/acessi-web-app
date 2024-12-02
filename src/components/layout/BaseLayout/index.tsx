import * as React from "react";

import { ProgressSpinner } from "primereact/progressspinner";

import { Footer } from "../Footer";

import * as Styled from "./styled";
import VLibras from "@djpfs/react-vlibras";

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Styled.Wrapper>
        {/* <Styled.PlacedHeader /> */}
        <Styled.PlacedSider />
        <Styled.ContentWrapper>
          <React.Suspense
            fallback={
              <Styled.SpinnerWrapper>
                <ProgressSpinner />
              </Styled.SpinnerWrapper>
            }
          >
            {children}
            <div>
              <VLibras forceOnload={true} />
            </div>
          </React.Suspense>
          {/* <Footer /> */}
        </Styled.ContentWrapper>
      </Styled.Wrapper>
    </div>
  );
};

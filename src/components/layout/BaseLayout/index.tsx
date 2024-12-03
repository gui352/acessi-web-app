import * as React from "react";

import { ProgressSpinner } from "primereact/progressspinner";

import { Footer } from "../Footer";

import * as Styled from "./styled";
import VLibras from "@djpfs/react-vlibras";
import { FloatButton } from "antd";

import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";

export const BaseLayout: React.FC = ({ children }) => {
  const [isListening, setIsListening] = React.useState(false);

  const startStopListening = () => {
    setIsListening(!isListening);
  }

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
            <FloatButton
              shape="circle"
              type="primary"
              style={{ insetInlineEnd: 94, position: "fixed", bottom: "38vh", right: "0.5vw" }}
              icon={isListening ? <AudioMutedOutlined /> : <AudioOutlined />}
              onClick={() => { startStopListening() }}
            />
          </React.Suspense>
          {/* <Footer /> */}
        </Styled.ContentWrapper>
      </Styled.Wrapper>
    </div>
  );
};

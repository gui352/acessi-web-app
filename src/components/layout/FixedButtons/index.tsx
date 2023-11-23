import React, { useState } from "react";
import { FloatButton } from "antd";
import {
  AudioOutlined,
  EyeOutlined,
  SoundOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export const FixedButtons = () => {
  return (
    <>
      <FloatButton.Group
        shape="circle"
        style={{
          right: 50,
          bottom: 10,
        }}
        trigger="click"
        icon={<QuestionCircleOutlined />}
      >
        <FloatButton icon={<EyeOutlined />} />
        <FloatButton icon={<AudioOutlined />} />
        <FloatButton icon={<SoundOutlined />} />
      </FloatButton.Group>
    </>
  );
};

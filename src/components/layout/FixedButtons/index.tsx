import React from "react";
import { Button } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  PlusOutlined,
  AudioOutlined,
  SoundOutlined,
} from "@ant-design/icons";

export const FixedButtons = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: 16,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 99,
        borderRadius: 3,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Button
        type="primary"
        shape="circle"
        icon={<ArrowUpOutlined />}
        style={{ marginBottom: 16, background: "#3C4F82" }}
        onClick={() => {}}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<AudioOutlined />}
        style={{ marginBottom: 16, background: "#3C4F82" }}
        onClick={() => {}}
      />
      <Button
        type="primary"
        shape="circle"
        style={{ background: "#3C4F82" }}
        icon={<SoundOutlined />}
        onClick={() => {}}
      />
    </div>
  );
};

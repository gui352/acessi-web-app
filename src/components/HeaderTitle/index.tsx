import React from "react";
import { Typography, Input, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface PropsHeaderTitle {
  titleBold: string;
  normalTitle?: string;
  displayFilters?: boolean;
}

export const HeaderTitle = ({
  titleBold,
  normalTitle,
  displayFilters,
}: PropsHeaderTitle) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "base-line",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "baseline", color: "#3C4F82" }}
      >
        <Title
          level={2}
          style={{
            fontWeight: "bold",
            marginRight: "10px",
            marginBottom: "0",
            color: "#3C4F82",
          }}
        >
          {titleBold}
        </Title>
        <span
          style={{
            fontSize: 20,
            color: "#3C4F82",
          }}
        >
          {normalTitle}
        </span>
      </div>

      <div
        style={{
          // display: "flex",
          alignItems: "center",
          display: displayFilters === false ? "none" : "flex",
        }}
      >
        <Input.Search
          placeholder="Pesquisar..."
          style={{ marginRight: "10px" }}
        />
        <Button type="primary" icon={<FilterOutlined />} />
      </div>
    </div>
  );
};

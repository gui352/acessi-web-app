import React from "react";
import { Card, Typography } from "antd";
import { Header } from "./Header";
import * as Styled from "./styled";

const { Title, Text } = Typography;

interface PropsCard {
  portalName: string;
  logoSrc: string;
  title: string;
  summary: string;
  imageSrc: string;
  postDate: string;
  summaryDisplay?: boolean;
  location?: string;
  workingHours?: string;
}

export const CardComponent = ({
  portalName,
  logoSrc,
  title,
  summary,
  imageSrc,
  postDate,
  summaryDisplay,
  location,
  workingHours,
}: PropsCard) => {
  return (
    <Card
      style={{
        width: "95%",
        color: "#3C4F82",
        margin: "0px 0px 10px 20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Header portalName={portalName} logoSrc={logoSrc} />

      <Styled.Container>
        <div style={{ float: "right", marginLeft: 16 }}>
          <img
            alt={portalName}
            src={imageSrc}
            style={{
              width: "100%",
              height: 150,
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
        </div>

        <Title level={3} style={{ color: "#3C4F82" }}>
          {title}
        </Title>

        <p style={{ display: summaryDisplay === false ? "none" : "" }}>
          {summary}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text type="secondary">{postDate}</Text>
          <Text style={{ color: "#3C4F82" }} type="secondary">
            {location}
          </Text>
          <Text type="secondary">{workingHours}</Text>
        </div>
      </Styled.Container>
    </Card>
  );
};

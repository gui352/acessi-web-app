import React from "react";
import { Card, Rate, Button } from "antd";

export const AssessmentsCard = ({ nameAssessment, imageUrl }) => {
  return (
    <Card
      bodyStyle={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      cover={
        <img alt={nameAssessment} src={imageUrl} style={{ height: 200 }} />
      }
      style={{ width: 240 }}
    >
      <h3>{nameAssessment}</h3>
      <Rate allowHalf defaultValue={0} />
      <div style={{ marginTop: 16, display: "flex", alignItems: "center" }}>
        <Button type="primary" style={{ marginRight: 8 }}>
          Ver
        </Button>
        <Button>Avaliar</Button>
      </div>
    </Card>
  );
};

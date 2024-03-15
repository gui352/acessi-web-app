import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating"; // PrimeReact não possui um componente 'Rate', mas você pode usar 'Rating'

export const AssessmentsCard = ({ nameAssessment, imageUrl }) => {
  return (
    <Card
      title={nameAssessment}
      style={{
        width: "240px",
        marginBottom: "2em",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      header={
        <img
          alt={nameAssessment}
          src={imageUrl}
          style={{ height: 200, objectFit: "cover", width: "100%" }}
        />
      }
    >
      <Rating value={null} stars={5} cancel={false} />{" "}
      {/* Utilize a prop `value` para controlar a avaliação */}
      <div style={{ marginTop: 16, display: "flex", alignItems: "center" }}>
        <Button
          label="Ver"
          className="p-button-raised p-button-primary"
          style={{ marginRight: 8 }}
        />
        <Button label="Avaliar" className="p-button-raised" />
      </div>
    </Card>
  );
};

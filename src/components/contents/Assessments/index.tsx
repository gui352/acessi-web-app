import React from "react";
import { Card } from "primereact/card";
import { Galleria } from "primereact/galleria";
import "primeflex/primeflex.css";
import { HeaderTitle } from "components/HeaderTitle";

export const AssessmentsComponent = () => {
  const assessments = [
    {
      portalName: "Restaurante A",
      imageSrc: "/assets/images/restaurant.jpg",
      logoVisible: false,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      logoVisible: false,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      logoVisible: false,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      logoVisible: false,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      logoVisible: false,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      logoVisible: false,
    },
  ];

  // Função para renderizar cada item do Carousel (Galleria)
  const itemTemplate = (item) => {
    return (
      <img
        src={item.imageSrc}
        alt={item.portalName}
        style={{ width: "100%" }}
      />
    );
  };

  return (
    <>
      <HeaderTitle titleBold="Lugares" normalTitle="para visitar" />
      <Galleria
        value={assessments}
        item={itemTemplate}
        style={{ maxWidth: "640px", marginBottom: "20px" }}
      />
      <div style={{ padding: "20px" }}>
        <div className="p-grid p-fluid" style={{ gap: "1rem" }}>
          {assessments.map((estabelecimento, index) => (
            <div className="p-col-3" key={index}>
              <Card title={estabelecimento.portalName}>
                <img
                  src={estabelecimento.imageSrc}
                  alt={estabelecimento.portalName}
                  style={{ width: "100%" }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

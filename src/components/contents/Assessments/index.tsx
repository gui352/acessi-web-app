import React from "react";
import { Card } from "primereact/card";
import { Galleria } from "primereact/galleria";
import "primeflex/primeflex.css";
import { HeaderTitle } from "components/HeaderTitle";
import { CarouselComponent } from "components/Carousel";
import CardComponent from "components/Card";

export const AssessmentsComponent = () => {
  const assessments = [
    {
      portalName: "Restaurante A",
      imageSrc: "/assets/images/restaurant.jpg",
      hiddenRating: true,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      hiddenRating: true,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      hiddenRating: true,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      hiddenRating: true,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      hiddenRating: true,
    },
    {
      portalName: "Café B",
      imageSrc: "/assets/images/coffee.jpg",
      hiddenRating: true,
    },
  ];

  return (
    <>
      <HeaderTitle titleBold={"Lugares"} normalTitle={"para visitar"} />
      <CarouselComponent data={assessments} />
      <div style={{ marginTop: 50 }}>
        {assessments.map((n, i) => (
          <CardComponent portalName={n.portalName} title={n.portalName} imageSrc={n.imageSrc} hiddenRating={true} />
        ))}
      </div>
    </>
  );
};

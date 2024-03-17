import { Col, Row } from "antd";
import { AssessmentsCard } from "components/AssessmentsCard";
import { CarouselComponent } from "components/Carousel";
import { HeaderTitle } from "components/HeaderTitle";
import React from "react";

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

  return (
    <>
      <HeaderTitle titleBold="Lugares" normalTitle="para visitar" />
      <CarouselComponent data={assessments} />
      <div style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          {assessments.map((estabelecimento, index) => (
            <Col span={6} key={index}>
              <AssessmentsCard
                nameAssessment={estabelecimento.portalName}
                imageUrl={estabelecimento.imageSrc}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

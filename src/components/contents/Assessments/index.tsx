import { Col, Row } from "antd";
import { AssessmentsCard } from "components/AssessmentsCard";
import { CarouselComponent } from "components/Carousel";
import { HeaderTitle } from "components/HeaderTitle";
import React from "react";
import { AvaliationService } from "services/Avaliations/AvaliationService";
import { useEffect, useState } from "react";
import { AvaliationInterface } from "interfaces/Avaliations/AvaliationInterface";

export const AssessmentsComponent = () => {
  const avaliationService = new AvaliationService();
  const [avaliationFilter, setFilterAvalation] = useState<string>("");
  const [assessments, setAssessments] = useState<AvaliationInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await avaliationService.GetAvaliations("");
        setAssessments(response);
      } catch (error) {
        console.error("Error fetching assessments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  return (
    <>
      <HeaderTitle titleBold="Lugares" normalTitle="para visitar" />
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <CarouselComponent data={assessments} />
      )}
      <div style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          {assessments.map((estabelecimento, index) => (
            <Col span={6} key={index}>
              <AssessmentsCard assessment={estabelecimento} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

import React from "react";
import { Carousel } from "primereact/carousel";
import { CardComponent } from "components/Card";
import { AvaliationInterface } from "interfaces/Avaliations/AvaliationInterface";

interface CarouselComponentProps {
  data: AvaliationInterface[];
}

export const CarouselComponent: React.FC<CarouselComponentProps> = ({
  data,
}) => {
  console.log("data 1", data);

  const mapAvaliationToCardProps = (avaliation: AvaliationInterface) => ({
    portalName: avaliation.name,
    // Adicione um valor padrão ou derive dos dados
    title: avaliation.name,
    summary: `Nota: ${Math.round(avaliation.avaliationRating)}`, // Construa o resumo
    imageSrc: avaliation.imageAvaliationLocal,
    postDate: "", // Adicione um valor padrão ou derive dos dados
    summaryDisplay: true, // Valor padrão ou derive
    location: "", // Adicione ou derive dos dados
    workingHours: "", // Adicione ou derive
    logoVisible: false, // Valor padrão
  });

  const dataTemplate = (data: AvaliationInterface) => {
    const cardProps = mapAvaliationToCardProps(data);
    return <CardComponent {...cardProps} />;
  };
  return (
    <div className="card">
      <Carousel
        value={data}
        numScroll={1}
        numVisible={2}
        showIndicators={false}
        itemTemplate={dataTemplate}
      />
    </div>
  );
};

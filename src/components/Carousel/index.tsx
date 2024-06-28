import React from "react";
import { Carousel } from "primereact/carousel";
import CardComponent from "components/Card";

export const CarouselComponent = ({ data }) => {
  const dataTemplate = (data) => {
    return <CardComponent {...data} width={"80%"} />;
  };

  return (
    <div className="card">
      <Carousel
        value={data}
        numScroll={1}
        numVisible={3}
        showIndicators={false}
        itemTemplate={dataTemplate}
      />
    </div>
  );
};

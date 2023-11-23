import React from "react";
import { Carousel } from "primereact/carousel";
import { CardComponent } from "components/Card";

export const CarouselComponent = ({ data }) => {
  const dataTemplate = (data) => {
    return <CardComponent {...data} />;
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

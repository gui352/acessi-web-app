import React, { ReactHTMLElement, useState } from "react";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag"; // Substituto sugerido para Typography para mostrar texto com estilos
import * as Styled from "./styled";

// Ajuste conforme necessário se Header e Styled.Container forem específicos do Ant Design
import { Header } from "./Header";
import { Rating } from "primereact/rating";

interface PropsCardComponent {
  portalName: string;
  title: string;
  summary?: string;
  imageSrc: string;
  postDate?: string;
  summaryDisplay?: boolean;
  location?: string;
  workingHours?: string;
  logoVisible?: boolean;
  width?: string;
  hiddenTag?: boolean;
  hiddenRating?: boolean;
}

const CardComponent: React.FC<PropsCardComponent> = ({
  portalName,
  title,
  summary,
  imageSrc,
  postDate,
  summaryDisplay,
  location,
  workingHours,
  logoVisible,
  width,
  hiddenTag,
  hiddenRating,
}) => {

  const [value, setValue] = useState(4.5);
  // Header personalizado e corpo do cartão para PrimeReact
  const header = (
    <img
      alt={portalName}
      src={imageSrc}
      style={{
        width: "100%",
        height: 250,
        objectFit: "cover",
        borderRadius: "3px 3px 0px 0px",
      }}
    />
  );

  return (
    <Card
      title={title}
      style={{
        width: width ?? "95%",
        margin: "0px 0px 10px 20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        color: "#3C4F82",
      }}
      header={header}
    >
      <Header
        portalName={portalName}
        logoSrc={imageSrc}
        logoVisible={logoVisible}
      />
      <Styled.Container>
        {/* <h3 style={{ color: "#3C4F82" }}>{title}</h3> */}
        {summaryDisplay !== false && <p>{summary}</p>}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {postDate && <Tag value={postDate} severity="info" />}
          {location && <Tag value={location} severity="info" />}
          {workingHours && <Tag value={workingHours} severity="info" />}
        </div>
        {hiddenRating && <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} readOnly />}
      </Styled.Container>
    </Card >
  );
};

export default CardComponent;

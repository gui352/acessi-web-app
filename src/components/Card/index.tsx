import React from "react";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag"; // Substituto sugerido para Typography para mostrar texto com estilos
import * as Styled from "./styled";

// Ajuste conforme necessário se Header e Styled.Container forem específicos do Ant Design
import { Header } from "./Header";

interface PropsCardComponent {
  portalName;
  logoSrc;
  title;
  summary;
  imageSrc;
  postDate;
  summaryDisplay;
  location;
  workingHours;
  logoVisible;
  width?
}

const CardComponent: React.FC<PropsCardComponent> = ({
  portalName,
  logoSrc,
  title,
  summary,
  imageSrc,
  postDate,
  summaryDisplay,
  location,
  workingHours,
  logoVisible,
  width
}) => {
  // Header personalizado e corpo do cartão para PrimeReact
  const header = (
    <img
      alt={portalName}
      src={imageSrc}
      style={{
        width: "100%",
        height: 150,
        objectFit: "cover",
        borderRadius: 3,
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
        logoSrc={logoSrc}
        logoVisible={logoVisible}
      />
      <Styled.Container>
        <h3 style={{ color: "#3C4F82" }}>{title}</h3>
        {summaryDisplay !== false && <p>{summary}</p>}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Tag value={postDate} severity="info" />
          {location && <Tag value={location} severity="info" />}
          {workingHours && <Tag value={workingHours} severity="info" />}
        </div>
      </Styled.Container>
    </Card>
  );
};

export default CardComponent;

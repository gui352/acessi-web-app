import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css"; // Tema
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // Ícones

interface PropsHeaderTitle {
  titleBold: string;
  normalTitle?: string;
  displayFilters?: boolean;
}

export const HeaderTitle = ({
  titleBold,
  normalTitle,
  displayFilters,
}: PropsHeaderTitle) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 40,
        marginLeft: "5%"
      }}
    >
      <div
        style={{ display: "flex", alignItems: "baseline", color: "#3C4F82" }}
      >
        <h2
          style={{
            fontWeight: "bold",
            fontSize: 40,
            marginRight: "10px",
            marginBottom: "0",
            color: "#3C4F82",
          }}
        >
          {titleBold}
        </h2>
        <span style={{ fontSize: 25, color: "#3C4F82" }}>{normalTitle}</span>
      </div>

      {displayFilters !== false && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputText
            placeholder="Pesquisar..."
            style={{ marginRight: "10px" }}
          />
          <Button icon="pi pi-filter" className="p-button-primary" />
        </div>
      )}
    </div>
  );
};

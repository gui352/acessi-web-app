import React from "react";

import { HeaderTitle } from "components/HeaderTitle";
import { ImageGallery } from "components/Gallery"; // Supondo que isso não dependa do Ant Design
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

export const HomePage = () => {
  return (
    <>
      <HeaderTitle
        titleBold={"Principais"}
        normalTitle={"notícias"}
        displayFilters={false}
      />
      <ImageGallery />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1em",
        }}
      >
        <Button
          icon="pi pi-plus-circle"
          className="p-button-text"
          onClick={() => (window.location.href = "/news")}
          style={{ color: "#3C4F82" }}
        >
          Veja mais
        </Button>
      </div>
    </>
  );
};

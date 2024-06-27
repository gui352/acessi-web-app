import React from "react";

import { HeaderTitle } from "components/HeaderTitle";
import { ImageGallery } from "components/Gallery";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

export const HomePage = () => {
  return (
    <>
      <div style={{ height: "100%" }}>
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
          }}
        >
          <Button
            icon="pi pi-plus-circle"
            // className="p-button-text"

            onClick={() => (window.location.href = "/news")}
            className="p-button-raised p-button-text"
            style={{
              background: "#3C4F82",
              color: "white",
              height: 40,
              margin: 15,
            }}
          >
            <p style={{ marginLeft: 10 }}>Veja mais</p>
          </Button>
        </div>
      </div>
    </>
  );
};

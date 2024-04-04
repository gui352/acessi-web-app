import React from "react";

export const ImageGallery = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {/* Imagem à Esquerda (Maior) */}

      <div style={{ position: "relative", width: "60%" }}>
        <img
          src="/assets/images/accessible.jpg"
          alt="Imagem Esquerda"
          style={{ borderRadius: 10, width: "95%", height: "99%" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "1%",
            left: 0,
            background: "rgba(0, 0, 0, 0.3)",
            color: "white",
            padding: "8px",
            width: "95%",
            boxSizing: "border-box",
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          Legenda da Imagem Esquerda
        </div>
      </div>

      {/* Container para as Imagens Menores */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
          width: "30%",
        }}
      >
        {/* Primeira Imagem à Direita (Menor) */}
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src="/assets/images/accessible.jpg"
            alt="Imagem Direita 1"
            style={{ borderRadius: 10, width: "95%", height: "95%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: 0,
              background: "rgba(0, 0, 0, 0.3)",
              color: "white",
              padding: "8px",
              width: "95%",
              boxSizing: "border-box",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            Legenda da Imagem Direita 1
          </div>
        </div>

        {/* Segunda Imagem à Direita (Menor) */}
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src="/assets/images/accessible.jpg"
            alt="Imagem Direita 2"
            style={{
              borderRadius: 10,
              width: "95%",
              height: "97%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "3%",
              left: 0,
              background: "rgba(0, 0, 0, 0.3)",
              color: "white",
              padding: "8px",
              width: "95%",
              boxSizing: "border-box",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            Legenda da Imagem Direita 2
          </div>
        </div>
      </div>
    </div>
  );
};

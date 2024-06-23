import React from "react";

export const ImageGallery = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        height: "55%",
      }}
    >
      {/* Imagem à Esquerda (Maior) */}

      <div
        style={{
          position: "relative",
          marginBottom: "10px",
          width: "70%",
          height: "100%",
        }}
      >
        <img
          src="/assets/images/accessible.jpg"
          alt="Imagem Esquerda"
          style={{ borderRadius: 3, width: "97%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.3)",
            color: "white",
            padding: "8px",
            width: "90%",
            boxSizing: "border-box",
            borderRadius: 3,
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
          justifyContent: "space-between",
          width: "30%",
          height: "55%",
        }}
      >
        {/* Primeira Imagem à Direita (Menor) */}
        <div
          style={{
            position: "relative",
            flex: "1 0 30%",
            width: "100%",
            height: "70%",
            marginBottom: 9,
          }}
        >
          <img
            src="/assets/images/accessible.jpg"
            alt="Imagem Direita 1"
            style={{ borderRadius: 3, width: "100%", height: "95%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: 0,
              background: "rgba(0, 0, 0, 0.3)",
              color: "white",
              padding: "8px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 3,
            }}
          >
            Legenda da Imagem Direita 1
          </div>
        </div>

        {/* Segunda Imagem à Direita (Menor) */}
        <div
          style={{
            position: "relative",
            flex: "1 0 30%",
            width: "100%",
            height: "70%",
          }}
        >
          <img
            src="/assets/images/accessible.jpg"
            alt="Imagem Direita 2"
            style={{ borderRadius: 3, width: "100%", height: "95%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: 0,
              background: "rgba(0, 0, 0, 0.3)",
              color: "white",
              padding: "8px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 3,
            }}
          >
            Legenda da Imagem Direita 2
          </div>
        </div>
      </div>
    </div>
  );
};

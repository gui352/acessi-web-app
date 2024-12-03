import React from "react";

export const ImageGallery = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "center",
        width: "100%",
        height: "70%",
        marginBottom: 30
      }}
    >
      {/* Imagem à Esquerda (Maior) */}

      <div style={{ position: "relative", width: "70%", height: "100%" }}>
        <img
          src="/assets/images/WEG.jpeg"
          alt="Imagem Esquerda"
          style={{ borderRadius: 3, width: "95%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "8px",
            width: "95%",
            boxSizing: "border-box",
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          WEG leva cadeirantes para corrida de rua em Jaraguá do Sul
        </div>
      </div>

      {/* Container para as Imagens Menores */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "30%",
          height: "100%"
        }}
      >
        {/* Primeira Imagem à Direita (Menor) */}
        <div
          style={{
            position: "relative",
            marginBottom: "20px",
            flex: "0 0 30%",
            height: "48%"
          }}
        >
          <img
            src="/assets/images/OCP.jpeg"
            alt="Imagem Direita 1"
            style={{ borderRadius: 3, width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "8px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            Assistência Social em Jaraguá do Sul lembra o Dia Nacional de Luta da Pessoa com Deficiência
          </div>
        </div>

        {/* Segunda Imagem à Direita (Menor) */}
        <div
          style={{
            position: "relative",
            // marginBottom: "10px",
            flex: "0 0 30%",
            height: "48%"
          }}
        >
          <img
            src="/assets/images/Camara.jpg"
            alt="Imagem Direita 2"
            style={{ borderRadius: 3, width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "8px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            Vereadores querem realização de Conferência das Pessoas com Deficiência
          </div>
        </div>
      </div>
    </div>
  );
};

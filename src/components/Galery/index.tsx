import React from "react";
import { Card, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

export const ImageGallery = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
      }}
    >
      {/* Imagem à Esquerda (Maior) */}

      <div style={{ position: "relative", marginBottom: "10px", width: "70%" }}>
        <img
          src="/assets/images/accessible.jpg"
          alt="Imagem Esquerda"
          style={{ borderRadius: 3, width: "97%", height: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.3)",
            color: "white",
            padding: "8px",
            width: "97%",
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
          width: "33%",
        }}
      >
        {/* Primeira Imagem à Direita (Menor) */}
        <div
          style={{
            position: "relative",
            marginBottom: "10px",
            flex: "1 0 30%",
          }}
        >
          <img
            src="/assets/images/accessible.jpg"
            alt="Imagem Direita 1"
            style={{ borderRadius: 3, width: "100%", height: "auto" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
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
            marginBottom: "10px",
            flex: "1 0 30%",
          }}
        >
          <img
            src="/assets/images/accessible.jpg"
            alt="Imagem Direita 2"
            style={{ borderRadius: 3, width: "100%", height: "auto" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
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

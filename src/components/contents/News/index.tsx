import { CardComponent } from "components/Card";
import { CarouselComponent } from "components/Carousel";
import { HeaderTitle } from "components/HeaderTitle";
import React from "react";

export const NewsComponent = () => {
  const newsData = [
    {
      portalName: "Nome do Portal 1",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Notícia 1",
      summary: "Resumo da notícia 1.",
      imageSrc: "/assets/images/accessibleII.jpg",
      postDate: "Data de Postagem 1",
    },
    {
      portalName: "Nome do Portal 2",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Notícia 2",
      summary: "Resumo da notícia 2.",
      imageSrc: "/assets/images/accessibleII.jpg",
      postDate: "Data de Postagem 2",
    },
    {
      portalName: "Nome do Portal 3",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Notícia 3",
      summary: "Resumo da notícia 3.",
      imageSrc: "/assets/images/accessibleII.jpg",
      postDate: "Data de Postagem 3",
    },
    {
      portalName: "Nome do Portal 4",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Notícia 4",
      summary: "Resumo da notícia 4.",
      imageSrc: "/assets/images/accessibleII.jpg",
      postDate: "Data de Postagem 4",
    },
    {
      portalName: "Nome do Portal 5",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Notícia 5",
      summary: "Resumo da notícia 5.",
      imageSrc: "/assets/images/accessibleII.jpg",
      postDate: "Data de Postagem 5",
    },
    {
      portalName: "Nome do Portal 6",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Notícia 6",
      summary: "Resumo da notícia 6.",
      imageSrc: "/assets/images/accessibleII.jpg",
      postDate: "Data de Postagem 6",
    },
  ];

  return (
    <>
      <HeaderTitle titleBold={"Principais"} normalTitle={"notícias"} />
      <CarouselComponent data={newsData} />
      <div style={{ marginTop: 50 }}>
        {newsData.map((n, i) => (
          <CardComponent {...n} />
        ))}
      </div>
    </>
  );
};

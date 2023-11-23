import { CardComponent } from "components/Card";
import { CarouselComponent } from "components/Carousel";
import { HeaderTitle } from "components/HeaderTitle";
import React from "react";

export const JobsComponent = () => {
  const jobsData = [
    {
      portalName: "Nome da Empresa 1",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Vaga 1",
      summary: "Resumo da Vaga 1.",
      imageSrc: "/assets/images/accessible.jpg",
      postDate: "Data de Postagem 1",
      location: "Jaraguá do Sul - SC",
      workingHours: "Tempo integral",
    },
    {
      portalName: "Nome da Empresa 2",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Vaga 2",
      summary: "Resumo da Vaga 2.",
      imageSrc: "/assets/images/accessible.jpg",
      postDate: "Data de Postagem 2",
      location: "Jaraguá do Sul - SC",
      workingHours: "Tempo integral",
    },
    {
      portalName: "Nome da Empresa 3",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Vaga 3",
      summary: "Resumo da Vaga 3.",
      imageSrc: "/assets/images/accessible.jpg",
      postDate: "Data de Postagem 3",
      location: "Jaraguá do Sul - SC",
      workingHours: "Tempo integral",
    },
    {
      portalName: "Nome da Empresa 4",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Vaga 4",
      summary: "Resumo da Vaga 4.",
      imageSrc: "/assets/images/accessible.jpg",
      postDate: "Data de Postagem 4",
      location: "Jaraguá do Sul - SC",
      workingHours: "Tempo integral",
    },
    {
      portalName: "Nome da Empresa 5",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Vaga 5",
      summary: "Resumo da Vaga 5.",
      imageSrc: "/assets/images/accessible.jpg",
      postDate: "Data de Postagem 5",
      location: "Jaraguá do Sul - SC",
      workingHours: "Tempo integral",
    },
    {
      portalName: "Nome da Empresa 6",
      logoSrc: "/assets/images/acessi+Logo.svg",
      title: "Título da Vaga 6",
      summary: "Resumo da Vaga 6.",
      imageSrc: "/assets/images/accessible.jpg",
      postDate: "Data de Postagem 6",
      location: "Jaraguá do Sul - SC",
      workingHours: "Tempo integral",
    },
  ];

  return (
    <>
      <HeaderTitle titleBold={"Vagas de Emprego"} normalTitle={"para você"} />
      <CarouselComponent data={jobsData} />
      <div style={{ marginTop: 50 }}>
        {jobsData.map((n, i) => (
          <CardComponent {...n} />
        ))}
      </div>
    </>
  );
};

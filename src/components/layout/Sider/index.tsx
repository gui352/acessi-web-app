import { useRouter } from "next/router";

import * as React from "react";
export interface SiderProps {
  className?: string;
}

import { Menu } from "primereact/menu";

export const Sider: React.FC<SiderProps> = ({ className }) => {
  const router = useRouter();

  const model = [
    {
      template: () => {
        return (
          <span>
            <img
              width="250"
              height="35"
              style={{ margin: "30px 0px" }}
              src="/assets/images/acessi+LogoName.svg"
            />
          </span>
        );
      },
    },
    {
      label: "Página inicial",
      icon: "pi pi-fw pi-home",
      command: () => {
        router.push("/home");
      },
    },
    {
      label: "Cadastro",
      icon: "pi pi-fw pi-id-card",
      command: () => {
        router.push("/registerPcd");
      },
    },
    {
      label: "Notícias",
      icon: "pi pi-fw pi-megaphone",
      command: () => {
        router.push("/news");
      },
    },
    {
      label: "Vagas",
      icon: "pi pi-fw pi-shopping-bag",
      command: () => {
        router.push("/jobs");
      },
    },
    {
      label: "Dashboards",
      icon: "pi pi-fw pi-chart-bar",
      command: () => {
        router.push("/dashboards");
      },
    },
    {
      label: "Avaliações",
      color: "blue",
      icon: "pi pi-fw pi-star",
      command: () => {
        router.push("/assessments");
      },
    },
  ];

  return (
    <>
      <Menu model={model} style={{ width: 250, border: "none" }} />
    </>
  );
};

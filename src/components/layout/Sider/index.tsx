import Link from "next/link";
import { useRouter } from "next/router";

import * as React from "react";

import { MENUS } from "../../../configs/nav";
import { usePersistedState } from "hooks/usePersistedState";
import { Menu } from "primereact/menu";

export interface SiderProps {
  className?: string;
}

export const Sider: React.FC<SiderProps> = ({ className }) => {
  const router = useRouter();

  const [visible, setVisible] = usePersistedState("sider.collapsed", true);

  // const current = router?.asPath?.match(/^\/(\w*)/)[0];

  // const userMenus = MENUS.filter((menu) => {
  //   if (!menu.roles) {
  //     return true;
  //   }

  //   return false;
  // });

  const menuModel = [
    {
      label: "Página inicial",
      icon: "pi pi-fw pi-home",
      url: "/home",
    },
    {
      label: "Cadastro",
      icon: "pi pi-fw pi-id-card",
      url: "/register-pcd",
    },
    {
      label: "Notícias",
      icon: "pi pi-fw pi-megaphone",
      url: "/news",
    },
    {
      label: "Vagas",
      icon: "pi pi-fw pi-shopping-bag",
      url: "/jobs",
    },
    {
      label: "Dashboards",
      icon: "pi pi-fw pi-chart-bar",
      url: "/dashboards",
    },
    {
      label: "Avaliações",
      icon: "pi pi-fw pi-star",
      url: "/assessments",
    },
  ];

  return (
    <>
      <Menu model={menuModel} />
    </>
  );
};

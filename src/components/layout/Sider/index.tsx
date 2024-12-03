import { useRouter } from "next/router";

import * as React from "react";
export interface SiderProps {
  className?: string;
}

import { Menu } from "primereact/menu";
import { UserService } from "services/User/UserService";

export const Sider: React.FC<SiderProps> = ({ className }) => {
  const router = useRouter();

  const [model, setModel] = React.useState([
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
    // {
    //   label: "Notícias",
    //   icon: "pi pi-fw pi-megaphone",
    //   command: () => {
    //     router.push("/news");
    //   },
    // },
    // {
    //   label: "Vagas",
    //   icon: "pi pi-fw pi-shopping-bag",
    //   command: () => {
    //     router.push("/jobs");
    //   },
    // },
    {
      label: "Censo",
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
    {
      label: "Cadastro de Avaliação",
      color: "blue",
      icon: "pi pi-fw pi-briefcase",
      command: () => {
        router.push("/register-avaliations");
      },
    },
  ]);

  React.useEffect(() => {
    new UserService().isAdmin().then((res) => {
      if (res.data === false) {
        setModel(model.splice(0, model.length - 1));
      }
    });
  }, []);

  return (
    <>
      <Menu model={model} style={{ width: 250, height: "100%", border: "none" }} />
    </>
  );
};

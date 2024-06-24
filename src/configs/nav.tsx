import { PrimeIcons } from "primereact/api";

export const DEFAULT_ROUTE = "/";

interface NavEntry {
  name: string; // Chave de tradução para o arquivo layout.json
  icon: string; // Icone que será mostrado ao lado do item
  path: string; // Caminho da sua página
  roles?: string[]; // Define a quais tipos de usuários esta opção estará disponível
}

export const MENUS: NavEntry[] = [
  {
    name: "Página inicial",
    icon: "pi pi-fw pi-home",
    path: "/home",
    roles: ["user", "manager"],
  },
  {
    name: "Cadastro",
    icon: "pi pi-fw pi-id-card",
    path: "/registerPcd",
  },
  {
    name: "Notícias",
    icon: "pi pi-fw pi-megaphone",
    path: "/news",
  },
  {
    name: "Vagas",
    icon: "pi pi-fw pi-shopping-bag",
    path: "/jobs",
  },
  {
    name: "Dashboards",
    icon: "pi pi-fw pi-chart-bar",
    path: "/dashboards",
  },
  {
    name: "Avaliações",
    icon: "pi pi-fw pi-star",
    path: "/assessments",
  },
  // {
  //   name: "Cadastro de Empresa",
  //   icon: "pi pi-fw pi-briefcase",
  //   path: "/register-company",
  // },
];

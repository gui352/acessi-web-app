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
    icon: "pi pi-refresh",
    path: "/home",
  },
  {
    name: "Cadastro",
    icon: "pi pi-refresh",
    path: "/register-pcd",
  },
  {
    name: "Notícias",
    icon: "pi pi-refresh",
    path: "/news",
  },
  {
    name: "Vagas",
    icon: "pi pi-refresh",
    path: "/jobs",
  },
  {
    name: "Avaliações",
    icon: "pi pi-refresh",
    path: "/assessments",
  },
];

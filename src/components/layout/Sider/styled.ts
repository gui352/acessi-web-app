import styled from "@emotion/styled";
import { Menu } from "primereact/menu";

export const ContainerMenu = styled(Menu)`
  .menu_items {
    color: ${({ theme }) => theme.color.primary.bluePrimary};
  }
`;

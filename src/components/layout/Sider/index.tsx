import { useRouter } from "next/router";

import * as React from "react";
import { Link } from "react-router-dom";

import { MENUS } from "../../../configs/nav";

import * as Styled from "./styled"

export interface SiderProps {
  className?: string;
}

export const Sider: React.FC<SiderProps> = ({ className }) => {
  const router = useRouter();

  // const [visible, setVisible] = usePersistedState("sider.collapsed", true);

  // const current = router?.asPath?.match(/^\/(\w*)/)[0];

  // const userMenus = MENUS.filter((menu) => {
  //   if (!menu.roles) {
  //     return true;
  //   }

  //   return false;
  // });

  const menuModel = MENUS.map((menu) => {
    return {label:menu.name, icon: menu.icon, command: (() => {router.push(menu.path)}) };
  })

  return (
    <>
      <Styled.MenuLayout model={menuModel} />
    </>
  );
};

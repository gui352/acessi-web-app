import { useRouter } from "next/router";
import Link from "next/link";

import * as React from "react";

import { MENUS } from "../../../configs/nav";
import { usePersistedState } from "hooks/usePersistedState";
// import { Menu } from "primereact/menu";

export interface SiderProps {
  className?: string;
}

import { Menu } from "antd";

export const Sider: React.FC<SiderProps> = ({ className }) => {
  const router = useRouter();

  const current = router.asPath.match(/^\/(\w*)/)[0];

  // const current = router?.asPath?.match(/^\/(\w*)/)[0];

  // const userMenus = MENUS.filter((menu) => {
  //   if (!menu.roles) {
  //     return true;
  //   }

  //   return false;
  // });

  const menuModel = MENUS.map((menu) => {
    return {
      label: (
        <Link href={menu.path} passHref>
          <span>{menu.name}</span>
        </Link>
      ),
      key: menu.path,
      icon: <i className={menu.icon} style={{ fontSize: "1rem" }}></i>,
    };
  });

  return (
    <>
      <Menu
        style={{ width: 230 }}
        items={menuModel}
        selectedKeys={current ? [current] : undefined}
      />
    </>
  );
};

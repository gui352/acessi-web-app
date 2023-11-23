import React from "react";

import { HeaderTitle } from "components/HeaderTitle";
import { ImageGallery } from "components/Galery";
import { Button } from "antd";
import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";

export const HomePage = () => {
  return (
    <>
      <HeaderTitle
        normalTitle={"notícias"}
        titleBold={"Principais"}
        displayFilters={false}
      />
      <ImageGallery />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          icon={<PlusCircleFilled />}
          href="/news"
          style={{ color: "#3C4F82" }}
        >
          Veja mais
        </Button>
      </div>
    </>
  );
};

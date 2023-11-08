import React from "react";

import { Collapse, Select, Steps, Typography } from "antd";
import { PersonalRegister } from "./PersonalRegister";

export const RegisterPCDComponent = () => {
  const { Title } = Typography;

  const items = [
    {
      label: "PCD",
    },
    {
      label: "Pessoal",
    },
    {
      label: "Endereço",
    },
  ];

  const [selectedCity, setSelectedCity] = React.useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <>
      <Title level={3} style={{ marginLeft: 20, color: "#3C4F82" }}>
        {"Cadastro de pessoas com deficiência"}
      </Title>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        {/* <Steps items={items} /> */}
        <div style={{ textAlign: "center" }}>
          <Title
            level={2}
            style={{ width: 350, color: "#3C4F82", marginBottom: 50 }}
          >
            {"Para iniciar, selecione o seu tipo de deficiência"}
          </Title>
          <Select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            style={{ width: 350 }}
            // optionLabel="name"
            placeholder="Selecione uma deficiência"
          />
        </div>

        <div style={{ textAlign: "left", width: "150vh" }}>
          <Title level={4} style={{ color: "#3C4F82" }}>
            {"Cadastro Pessoal"}
          </Title>

          <Collapse>
            <Collapse.Panel header={"Pessoal"} key={1}>
              <PersonalRegister />
            </Collapse.Panel>
          </Collapse>

          <Title level={4} style={{ color: "#3C4F82" }}>
            {"Cadastro de endereço"}
          </Title>

          <Collapse>
            <Collapse.Panel header="Endereço" key={2}>
              <p className="m-0"></p>
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};

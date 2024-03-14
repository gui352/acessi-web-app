import React from "react";

import { PersonalRegister } from "./PersonalRegister";
import { DeficiencyRegister } from "./DeficiencyRegister";

import { Select, Collapse, Input, Button, Typography } from "antd";
import { HeaderTitle } from "components/HeaderTitle";
import { AdressRegister } from "./AdressRegister";
import { Form } from "components/common/Form";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const { Option } = Select;
const { Panel } = Collapse;

export const RegisterPCDComponent = () => {
  const { Title } = Typography;

  const [selectedCity, setSelectedCity] = React.useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  const methods = useFormContext();

  return (
    <div>
      <FormProvider control={control} {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HeaderTitle
            titleBold="Cadastro de pessoas com deficiência"
            displayFilters={false}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            <Title
              level={4}
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                width: "25%",
                color: "#3C4F82",
              }}
            >
              Para iniciar, selecione o seu tipo de deficiência:
            </Title>
            <Select style={{ width: "25%", marginBottom: 16 }}>
              <Option value="deficiencia1">Deficiência 1</Option>
              <Option value="deficiencia2">Deficiência 2</Option>
            </Select>
          </div>

          <Collapse style={{ marginBottom: 20 }}>
            <Panel header="Cadastro Pessoal" key="1">
              <PersonalRegister />
            </Panel>

            <Panel header="Cadastro de Endereço" key="2">
              <AdressRegister />
            </Panel>

            <Panel header="Cadastro de Deficiência" key="3">
              <DeficiencyRegister />
            </Panel>
          </Collapse>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              htmlType="submit"
              style={{ background: "#3C4F82", color: "white" }}
            >
              Salvar
            </Button>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

import React, { useEffect, useState } from "react";

import { PersonalRegister } from "./PersonalRegister";

import { Select, Collapse, Input, Button, Typography, message } from "antd";
import { HeaderTitle } from "components/HeaderTitle";
import { AdressRegister } from "./AdressRegister";
import { Form } from "components/common/Form";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { DisabilityTypeService } from "services/PCD/DisabilityTypeService";
import { DefaultOptionType } from "antd/es/select";
import { PCDModel } from "interfaces/PCD/PCDInterface";
import { AddressModel } from "interfaces/PCD/AddressInterface";
import { PCDService } from "services/PCD/PCDService";

const { Option } = Select;
const { Panel } = Collapse;

export const RegisterPCDComponent = () => {
  const { Title } = Typography;
  const disabilityTypeService = new DisabilityTypeService();
  const pcdService = new PCDService();
  const [messageApi, contextHolder] = message.useMessage();

  const [selectedCity, setSelectedCity] = React.useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data)

    const pcd: PCDModel = {
      namePCD: data.name,
      cpfPCD: data.cpf,
      birthDatePCD: data.birth,
      telephonePCD: data.phone,
      emailPCD: data.email,
      genderPCD: data.gender,
      educationLevelPCD: data.education,
      employee: data.isEmployee,
      publicTransportation: data.isUsePublicTransport,
      disabilityTypePCD: "AUDITIVA",
      addressPCD: {
        cityAddress: data.city,
        streetAddress: data.street,
        neighborhoodAddress: data.neighborhood,
        numberAddress: data.numberHome,
        complementAddress: data.complement,
        cepAddress: data.cep
      } as AddressModel
    };

    pcdService.CreateUser(pcd).then((res) => {
      console.log(res)
      if (res.status == 200) {
        messageApi.open({
          type: 'success',
          content: 'Cadastro concluído com sucesso',
        });
      }
    })

  };

  const methods = useFormContext();
  const [disabilityType, setDisabilityType] = useState([]);

  useEffect(() => {
    disabilityTypeService.GetType().then((res) => {
      const types = [];
      for (const type in res.data) {
        types.push({ value: type, label: res.data[type] });
      }
      setDisabilityType(types);
    });
  }, []);

  return (
    <div>
      {contextHolder}
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
            <Select style={{ width: "25%", marginBottom: 16 }} options={disabilityType}>
            </Select>
          </div>

          <Collapse style={{ marginBottom: 20 }}>
            <Panel header="Cadastro Pessoal" key="1">
              <PersonalRegister />
            </Panel>

            <Panel header="Cadastro de Endereço" key="2">
              <AdressRegister />
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

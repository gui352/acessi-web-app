import React, { useEffect, useState } from "react";

import {
  Select,
  Collapse,
  Input,
  Button,
  Typography,
  message,
  Row,
  Col,
} from "antd";
import { HeaderTitle } from "components/HeaderTitle";
import { Form } from "components/common/Form";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { CompanyModel } from "interfaces/Company/ComanyInterface";
import { AddressModel } from "interfaces/Adress/AddressInterface";
import { DisabilityTypeService } from "services/PCD/DisabilityTypeService";
import { DefaultOptionType } from "antd/es/select";
import { CompaniesService } from "services/Company/CompaniesService";
import ItemInput from "components/FormItems/ItemInput";

export const RegisterCompany = () => {
  const { Title } = Typography;
  const disabilityTypeService = new DisabilityTypeService();
  const companyService = new CompaniesService();
  const [messageApi, contextHolder] = message.useMessage();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const company: CompanyModel = {
      cnpj: data.cnpj,
      corporateName: data.corporateName,
      site: data.site,
      areaActivity: data.areaActivity,
      telephone: data.telephone,
      email: data.email,
      password: data.password,
    };

    companyService.CreateCompany(company).then((res) => {
      console.log(res);
      if (res.status == 200) {
        messageApi.open({
          type: "success",
          content: "Cadastro concluído com sucesso",
        });
      }
    });
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ background: "#f2f2f2", width: "50%", borderRadius: 10 }}>
          <HeaderTitle titleBold="Cadastro de Empresa" displayFilters={false} />

          <FormProvider control={control} {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ marginTop: 25 }}>
                <ItemInput
                  disabled={false}
                  label="CNPJ"
                  name="cnpj"
                  placeholder="Digite aqui..."
                />
                <ItemInput
                  disabled={false}
                  label="Razão Social"
                  name="corporateName"
                  placeholder="Digite aqui..."
                />
                <ItemInput
                  disabled={false}
                  label="Site"
                  name="site"
                  type={"url"}
                  placeholder="Digite aqui..."
                />
                <ItemInput
                  disabled={false}
                  label="Área de Atividade"
                  name="areaActivity"
                  placeholder="Digite aqui..."
                />
                <ItemInput
                  disabled={false}
                  label="Telefone"
                  name="telephone"
                  placeholder="Digite aqui..."
                />
                <ItemInput
                  disabled={false}
                  label="E-mail"
                  name="email"
                  type={"email"}
                  placeholder="Digite aqui..."
                />

                <ItemInput
                  disabled={false}
                  label="Senha"
                  name="password"
                  type={"password"}
                  placeholder="Digite aqui..."
                />
              </div>

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
      </div>
    </>
  );
};

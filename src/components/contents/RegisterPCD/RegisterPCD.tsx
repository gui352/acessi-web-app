import React from "react";

import { PersonalRegister } from "./PersonalRegister";

import { Select, Collapse, Form, Input, Button, Typography } from "antd";
import { HeaderTitle } from "components/HeaderTitle";

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

  return (
    <div>
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
          {/* Adicione mais opções conforme necessário */}
        </Select>
      </div>

      <Collapse style={{ marginBottom: 20 }}>
        {/* Cadastro Pessoal */}
        <Panel header="Cadastro Pessoal" key="1">
          <Form name="cadastroPessoal" onFinish={onFinishCadastroPessoal}>
            <Form.Item
              label="Nome"
              name="nome"
              rules={[
                { required: true, message: "Por favor, insira seu nome!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Por favor, insira um e-mail válido!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Panel>

        {/* Cadastro de Endereço */}
        <Panel header="Cadastro de Endereço" key="2">
          <Form name="cadastroEndereco" onFinish={onFinishCadastroEndereco}>
            <Form.Item
              label="Rua"
              name="rua"
              rules={[
                { required: true, message: "Por favor, insira o nome da rua!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Cidade"
              name="cidade"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o nome da cidade!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button href="/news" style={{ background: "#3C4F82", color: "white" }}>
          Salvar
        </Button>
      </div>
    </div>
  );
};

import React from "react";

import {
  Button,
  Collapse,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Steps,
  Switch,
  Typography,
} from "antd";

export const PersonalRegister = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values);
  };

  const options = [
    { label: "Sim", value: true },
    { label: "Não", value: false },
  ];
  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        validateMessages={validateMessages}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
        >
          <Form.Item name={["user", "name"]} label="Nome">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
        >
          <Form.Item
            name={["user", "cpf"]}
            label="CPF"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "phone"]} label="Telefone">
            <Input />
          </Form.Item>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
        >
          <Form.Item name={["user", "date"]} label="Data de nascimento">
            <DatePicker />
          </Form.Item>
          <Form.Item name={["user", "genere"]} label="Gênero">
            <Select />
          </Form.Item>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
        >
          <Form.Item name={["user", "school"]} label="Grau de escolaridade">
            <Select />
          </Form.Item>
          <Form.Item name={["user", "employ"]} label="Empregado?">
            <Radio.Group
              options={options}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
        </div>

        <Form.Item
          name={["user", "transport"]}
          label="Utiliza transporte público"
        >
          <Radio.Group
            options={options}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>
      </Form>
    </>
  );
};

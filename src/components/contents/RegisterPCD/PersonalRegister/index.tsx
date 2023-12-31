import React from "react";

import {
  Button,
  Collapse,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  Steps,
  Switch,
  Typography,
} from "antd";
import { Form } from "components/common/Form";
import ItemInput from "components/FormItems/ItemInput";
import ItemDatePicker from "components/FormItems/ItemDatePicker";
import ItemSelect from "components/FormItems/ItemSelect";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { SubForm } from "components/common/Form/SubForm";

export const PersonalRegister = () => {
  return (
    <>
      <ItemInput
        disabled={false}
        label="Nome"
        name="name"
        placeholder="Digite aqui..."
      />
      <ItemInput
        disabled={false}
        label="E-mail"
        name="email"
        type={"email"}
        placeholder="Digite aqui..."
      />

      <SubForm columns={2}>
        <ItemInput
          disabled={false}
          label="CPF"
          name="cpf"
          placeholder="Digite aqui..."
        />
        <ItemInput
          disabled={false}
          label="Telefone"
          name="phone"
          placeholder="Digite aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemDatePicker
          disabled={false}
          label="Data de nascimento"
          name="birth"
          placeholder="Selecione aqui..."
        />
        <ItemInput
          disabled={false}
          label="Gênero"
          name="gender"
          // options={[{}, {}, {}, {}]}
          placeholder="Selecione aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemInput
          disabled={false}
          label="Grau de escolaridade"
          name="education"
          // options={[{}, {}, {}, {}]}
          placeholder="Selecione aqui..."
        />
        <ItemYesNo disabled={false} label="Empregado?" name="isEmployee" />
      </SubForm>

      <ItemYesNo
        disabled={false}
        label="Utiliza transporte público?"
        name="isUsePublicTransport"
      />
    </>
  );
};

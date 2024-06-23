import React from "react";

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
        <ItemSelect
          disabled={false}
          label="Gênero"
          name="gender"
          options={[
            { label: "Masculino", value: "male" },
            { label: "Feminino", value: "female" },
            { label: "Outro", value: "other" },
            { label: "Prefiro não declarar", value: "notDeclare" },
          ]}
          placeholder="Selecione aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemSelect
          disabled={false}
          label="Grau de escolaridade"
          name="education"
          options={[
            { label: "Analfabeto", value: "Analfabeto" },
            {
              label: "Analfabeto (Incompleto)",
              value: "Analfabeto (Incompleto)",
            },
            {
              label: "Ensino Fundamental I Completo",
              value: "Ensino Fundamental I Completo",
            },
            {
              label: "Ensino Fundamental I Incompleto",
              value: "Ensino Fundamental I Incompleto",
            },
            {
              label: "Ensino Fundamental II Completo",
              value: "Ensino Fundamental II Completo",
            },
            {
              label: "Ensino Fundamental II Incompleto",
              value: "Ensino Fundamental II Incompleto",
            },
            {
              label: "Ensino Médio Completo",
              value: "Ensino Médio Completo",
            },
            {
              label: "Ensino Médio Incompleto",
              value: "Ensino Médio Incompleto",
            },
            {
              label: "Ensino Superior Completo",
              value: "Ensino Superior Completo",
            },
            {
              label: "Ensino Superior Incompleto",
              value: "Ensino Superior Incompleto",
            },
          ]}
          placeholder="Selecione aqui..."
        />

        <ItemSelect
          disabled={false}
          label="Raça/Cor"
          name="color"
          options={[
            { label: "Preta", value: "black" },
            { label: "Parda", value: "brown" },
            { label: "Amarela", value: "yellow" },
            { label: "Indígena", value: "indigenous" },
          ]}
          placeholder="Seelecione aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemYesNo disabled={false} label="Empregado?" name="isEmployee" />

        <ItemYesNo
          disabled={false}
          label="Utiliza transporte público?"
          name="isUsePublicTransport"
        />
      </SubForm>
    </>
  );
};

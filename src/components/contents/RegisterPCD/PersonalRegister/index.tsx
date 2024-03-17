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
          options={[{}, {}, {}, {}]}
          placeholder="Selecione aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemSelect
          disabled={false}
          label="Grau de escolaridade"
          name="education"
          options={[{}, {}, {}, {}]}
          placeholder="Selecione aqui..."
        />

        <ItemSelect
        disabled={false}
        label="Raça/Cor"
        name="color"
        options={
          [
            { label: "Preta", value: "black" },
            { label: "Parda", value: "brown" },
            { label: "Amarela", value: "yellow" },
            { label: "Indígena", value: "indigenous" },
          ]
        }
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

import ItemInput from "components/FormItems/ItemInput";
import ItemNumber from "components/FormItems/ItemNumber";
import ItemSelect from "components/FormItems/ItemSelect";
import { SubForm } from "components/common/Form/SubForm";
import React from "react";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { useForm } from "react-hook-form"

export const AdressRegister = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


  const { watch } = useForm();
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

  console.log(watch())
  return (
    <>
      <SubForm columns={3}>
        {/* <ItemSelect
          disabled={false}
          label="País"
          name="country"
          placeholder="Selecione aqui..."
          options={[{}, {}, {}, {}]}
        /> */}

        <ItemInput
          disabled={false}
          label="CEP"
          name="cep"
          placeholder="Digite aqui..."
        />

        {/* <ItemSelect
          disabled={false}
          label="Estado"
          name="state"
          placeholder="Selecione aqui..."
          options={[{}, {}, {}, {}]}
        /> */}
      </SubForm>

      <SubForm columns={2}>
        <ItemInput
          disabled={false}
          label="Cidade"
          name="city"
          placeholder="Digite aqui..."
        />

        <ItemInput
          disabled={false}
          label="Bairro"
          name="neighborhood"
          placeholder="Digite aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemInput
          disabled={false}
          label="Rua"
          name="street"
          placeholder="Digite aqui..."
        />

        <ItemInput
          disabled={false}
          label="Número"
          name="numberHome"
          placeholder="Digite aqui..."
        />
      </SubForm>

      <ItemInput
        disabled={false}
        label="Complemento"
        name="complement"
        placeholder="Digite aqui..."
      />

      <ItemYesNo
        disabled={false}
        label="Você reside junto com o PCD?"
        name="withPCD"
      />
    </>
  );
};

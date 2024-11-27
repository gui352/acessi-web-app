import ItemInput from "components/FormItems/ItemInput";
import { SubForm } from "components/common/Form/SubForm";
import React, { useEffect } from "react";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { useFormContext } from "react-hook-form"
import axios from "axios";

export const AdressRegister = () => {
  const { watch, setValue } = useFormContext();
  const cep = watch("cep")
  const cepAuxiliar = watch("cepAuxiliar")

  const fetchAddressData = async (cep, setFields) => {
    if (cep && cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        if (response.data) {
          const { localidade, uf, bairro, logradouro } = response.data
          setFields(localidade, uf, bairro, logradouro)
        }
      } catch (error) {
        console.error("Erro ao buscar dados do CEP: ", error)

      }
    }
  }

  // Busca para o endereço do PCD
  useEffect(() => {
    fetchAddressData(cep, (city, state, neighborhood, street) => {
      setValue("city", city);
      setValue("state", state);
      setValue("neighborhood", neighborhood);
      setValue("street", street);

      if (watch("withPCD") === true) {
        setValue("cityAuxiliar", city);
        setValue("stateAuxiliar", state);
        setValue("neighborhoodAuxiliar", neighborhood);
        setValue("streetAuxiliar", street);
      }
    });

  }, [cep, setValue]);

  // Busca para o endereço do Auxiliar
  useEffect(() => {
    fetchAddressData(cepAuxiliar, (city, state, neighborhood, street) => {
      setValue("cityAuxiliar", city);
      setValue("stateAuxiliar", state);
      setValue("neighborhoodAuxiliar", neighborhood);
      setValue("streetAuxiliar", street);
    });
  }, [cepAuxiliar, setValue]);

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

  console.log(watch())
  return (
    <>
      <SubForm columns={3}>
        <ItemInput
          disabled={false}
          label="CEP"
          name="cep"
          placeholder="Digite aqui..."
          mask="99999-999"
        />

        <ItemInput
          disabled={true}
          label="Estado"
          name="state"
          placeholder="Digite aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemInput
          disabled={true}
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


      <div style={{ display: watch("neededAssistency") === true ? "" : "none" }}>
        <ItemYesNo
          disabled={false}
          label="Você reside junto com o PCD?"
          name="withPCD"
        />
      </div>

      <div style={{ display: watch("withPCD") === false ? "" : "none" }}>
        <h3>Complementos do auxiliar:</h3>
        <SubForm columns={3}>
          <ItemInput
            disabled={false}
            label="CEP"
            name="cepAuxiliar"
            placeholder="Digite aqui..."
            mask="99999-999"
          />

          <ItemInput
            disabled={true}
            label="Estado"
            name="stateAuxiliar"
            placeholder="Digite aqui..."
          />
        </SubForm>

        <SubForm columns={2}>
          <ItemInput
            disabled={true}
            label="Cidade"
            name="cityAuxiliar"
            placeholder="Digite aqui..."
          />

          <ItemInput
            disabled={false}
            label="Bairro"
            name="neighborhoodAuxiliar"
            placeholder="Digite aqui..."
          />
        </SubForm>

        <SubForm columns={2}>
          <ItemInput
            disabled={false}
            label="Rua"
            name="streetAuxiliar"
            placeholder="Digite aqui..."
          />

          <ItemInput
            disabled={false}
            label="Número"
            name="numberHomeAuxiliar"
            placeholder="Digite aqui..."
          />
        </SubForm>

        <ItemInput
          disabled={false}
          label="Complemento"
          name="complementAuxiliar"
          placeholder="Digite aqui..."
        />
      </div>
    </>
  );
};

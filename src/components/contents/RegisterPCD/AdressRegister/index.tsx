import ItemInput from "components/FormItems/ItemInput";
import { SubForm } from "components/common/Form/SubForm";
import React, { useEffect } from "react";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { useFormContext } from "react-hook-form"
import axios from "axios";

export const AdressRegister = () => {
  const { watch, setValue } = useFormContext();
  const cep = watch("addressPCD.cepAddress")
  const cepAuxiliar = watch("auxiliarPCD.addressAuxiliar.cepAddress")

  const fetchAddressData = async (cep, setFields) => {
    const cepRegex = cep?.replace(/-/g, "")
    if (cepRegex && cepRegex.length === 8) {
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
      setValue("addressPCD.cityAddress", city);
      setValue("addressPCD.stateAddress", state);
      setValue("addressPCD.neighborhoodAddress", neighborhood);
      setValue("addressPCD.streetAddress", street);

      if (watch("auxiliarPCD.withPCD") === true) {
        setValue("auxiliarPCD.addressAuxiliar.cityAddress", watch("addressPCD.cityAddress"));
        setValue("auxiliarPCD.addressAuxiliar.stateAddress", watch("addressPCD.stateAddress"));
        setValue("auxiliarPCD.addressAuxiliar.neighborhoodAddress", watch("addressPCD.neighborhoodAddress"));
        setValue("auxiliarPCD.addressAuxiliar.streetAddress", watch("addressPCD.streetAddress"));
        setValue("auxiliarPCD.addressAuxiliar.cepAddress", watch("addressPCD.cepAddress"));
        setValue("auxiliarPCD.addressAuxiliar.complementAddress", watch("addressPCD.complementAddress"));
        setValue("auxiliarPCD.addressAuxiliar.numberAddress", watch("addressPCD.numberAddress"));
      }
    });

  }, [cep, setValue]);

  // Busca para o endereço do Auxiliar
  useEffect(() => {
    fetchAddressData(cepAuxiliar, (city, state, neighborhood, street) => {
      setValue("auxiliarPCD.addressAuxiliar.cityAuxiliar", city);
      setValue("auxiliarPCD.addressAuxiliar.stateAuxiliar", state);
      setValue("auxiliarPCD.addressAuxiliar.neighborhoodAuxiliar", neighborhood);
      setValue("auxiliarPCD.addressAuxiliar.streetAuxiliar", street);
    });
  }, [cepAuxiliar, setValue]);


  return (
    <>
      <SubForm columns={3}>
        <ItemInput
          disabled={false}
          label="CEP"
          name="addressPCD.cepAddress"
          placeholder="Digite aqui..."
          mask="99999-999"
          required={true}
        />

        <ItemInput
          disabled={true}
          label="Estado"
          name="addressPCD.stateAddress"
          placeholder="Digite aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemInput
          disabled={true}
          label="Cidade"
          name="addressPCD.cityAddress"
          placeholder="Digite aqui..."
        />

        <ItemInput
          disabled={false}
          label="Bairro"
          name="addressPCD.neighborhoodAddress"
          placeholder="Digite aqui..."
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemInput
          disabled={false}
          label="Rua"
          name="addressPCD.streetAddress"
          placeholder="Digite aqui..."
        />

        <ItemInput
          disabled={false}
          label="Número"
          name="addressPCD.numberAddress"
          placeholder="Digite aqui..."
        />
      </SubForm>

      <ItemInput
        disabled={false}
        label="Complemento"
        name="addressPCD.complementAddress"
        placeholder="Digite aqui..."
      />


      <div style={{ display: watch("neededAssistency") === true ? "" : "none" }}>
        <ItemYesNo
          disabled={false}
          label="Você reside junto com o PCD?"
          name="auxiliarPCD.withPCD"
        />
      </div>

      <div style={{ display: watch("auxiliarPCD.withPCD") === false ? "" : "none" }}>
        <h3>Complementos do auxiliar:</h3>
        <SubForm columns={3}>
          <ItemInput
            disabled={false}
            label="CEP"
            name="auxiliarPCD.addressAuxiliar.cepAddress"
            placeholder="Digite aqui..."
            mask="99999-999"
          />

          <ItemInput
            disabled={true}
            label="Estado"
            name="auxiliarPCD.addressAuxiliar.stateAddress"
            placeholder="Digite aqui..."
          />
        </SubForm>

        <SubForm columns={2}>
          <ItemInput
            disabled={true}
            label="Cidade"
            name="auxiliarPCD.addressAuxiliar.cityAddress"
            placeholder="Digite aqui..."
          />

          <ItemInput
            disabled={false}
            label="Bairro"
            name="auxiliarPCD.addressAuxiliar.neighborhoodAddress"
            placeholder="Digite aqui..."
          />
        </SubForm>

        <SubForm columns={2}>
          <ItemInput
            disabled={false}
            label="Rua"
            name="auxiliarPCD.addressAuxiliar.streetAddress"
            placeholder="Digite aqui..."
          />

          <ItemInput
            disabled={false}
            label="Número"
            name="auxiliarPCD.addressAuxiliar.numberAddress"
            placeholder="Digite aqui..."
          />
        </SubForm>

        <ItemInput
          disabled={false}
          label="Complemento"
          name="auxiliarPCD.addressAuxiliar.complementAddress"
          placeholder="Digite aqui..."
        />
      </div>
    </>
  );
};

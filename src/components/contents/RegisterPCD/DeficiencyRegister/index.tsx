import React from "react";

import ItemSelect from "components/FormItems/ItemSelect";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { SubForm } from "components/common/Form/SubForm";

export const DeficiencyRegister = () => {
  const deficiency = [
    { label: "Auditiva", value: "AUDITIVA" },
    { label: "Visual", value: "VISUAL" },
    { label: "Motora", value: "MOTORA" },
    { label: "Intelectual", value: "INTELECTUAL" },
    { label: "Austimo", value: "AUTISMO" },
    { label: "Física", value: "FISICA" },
    { label: "Cognitiva", value: "COGNITIVA" },
    { label: "Outra", value: "OUTRA" },
  ];

  return (
    <>
      <SubForm columns={2}>
        {/* <ItemSelect
          disabled={false}
          label="Tipo de deficiência"
          placeholder="Selecione aqui..."
          name="typeDeficiency"
          options={[
            { label: "Deficiência auditiva", value: "auditory" },
            { label: "Deficiência física", value: "physical" },
            { label: "Deficiência mental", value: "mental" },
            { label: "Deficiência visual", value: "visual" },
          ]}
        /> */}

        {/* <ItemSelect
          disabled={false}
          placeholder="Selecione aqui..."
          label="Tipo de deficiência"
          name="typeDeficiency"
          options={[
            { label: "Deficiência auditiva", value: "auditory" },
            { label: "Deficiência física", value: "physical" },
            { label: "Deficiência mental", value: "mental" },
            { label: "Deficiência visual", value: "visual" },
          ]}
        /> */}
      </SubForm>

      <SubForm columns={2}>
        <ItemYesNo
          disabled={false}
          label="Deficiência adquirida?"
          name="deficiencyAcquired"
        />

        <ItemSelect
          disabled={false}
          name="deficiency"
          options={deficiency}
          label="Selecione o tipo da deficiência"
          placeholder="Selecione aqui..."
        />
      </SubForm>
    </>
  );
};

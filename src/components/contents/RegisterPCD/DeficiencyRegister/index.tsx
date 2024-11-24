import React from "react";

import ItemSelect from "components/FormItems/ItemSelect";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { SubForm } from "components/common/Form/SubForm";
import { useFormContext } from "react-hook-form";
import ItemInput from "components/FormItems/ItemInput";

export const DeficiencyRegister = () => {
  // const deficiency = [
  //   { label: "Auditiva", value: "AUDITIVA" },
  //   { label: "Visual", value: "VISUAL" },
  //   { label: "Motora", value: "MOTORA" },
  //   { label: "Intelectual", value: "INTELECTUAL" },
  //   { label: "Austimo", value: "AUTISMO" },
  //   { label: "Física", value: "FISICA" },
  //   { label: "Cognitiva", value: "COGNITIVA" },
  //   { label: "Outra", value: "OUTRA" },
  // ];

  const { watch, resetField } = useFormContext();

  const deficiencyTypes = [
    { label: "Deficiência Múltipla", value: "deficiencia_multipla" },
    { label: "Cegueira", value: "cegueira", forms: [] },
    { label: "Baixa Visão", value: "baixa_visao", forms: [] },
    { label: "Surdez", value: "surdez", forms: [] },
    { label: "Deficiência Auditiva", value: "deficiencia_auditiva", forms: [] },
    { label: "Surdocegueira", value: "surdocegueira", forms: [] },
    {
      label: "Deficiência Física",
      value: "deficiencia_fisica",
      forms: [
        { label: "Paraplegia/Paraparesia", value: "paraplegia_paraparesia" },
        { label: "Tetraplegia/Tetraparesia", value: "tetraplegia_tetraparesia" },
        { label: "Monoplegia/Monoparesia", value: "monoplegia_monoparesia" },
        { label: "Hemiplegia/Hemiparesia", value: "hemiplegia_hemiparesia" },
        { label: "Amputação/Ausência de Membros", value: "amputacao_ausencia" },
        { label: "Paralisia Cerebral", value: "paralisia_cerebral" },
        { label: "Nanismo", value: "nanismo" },
        { label: "Ostomia", value: "ostomia" },
        { label: "Deformidades no Corpo", value: "deformidades_corpo" }
      ]
    },
    { label: "Deficiência Mental/Intelectual", value: "deficiencia_mental", forms: [] },
    {
      label: "Transtornos Globais do Desenvolvimento",
      value: "transtornos_desenvolvimento",
      forms: [
        { label: "Autismo", value: "autismo" },
        { label: "Psicose Infantil", value: "psicose_infantil" },
        { label: "Síndrome de Kanner", value: "sindrome_kanner" },
        { label: "Síndrome de Rett", value: "sindrome_rett" },
        { label: "Síndrome de Asperger", value: "sindrome_asperger" }
      ]
    },
    { label: "Síndrome de Down", value: "sindrome_down", forms: [] },
    { label: "Doenças Crônicas/Degenerativas", value: "doencas_cronicas", forms: [] }
  ];

  const selectedDeficiencyValue = watch("deficiency");
  const selectedDeficiency = deficiencyTypes.find(
    (def) => def.value === selectedDeficiencyValue
  );

  React.useEffect(() => {
    if (selectedDeficiency && selectedDeficiency.forms.length === 0) {
      resetField("formTypeDeficiency");
    }
  }, [selectedDeficiency, resetField]);

  console.log("DEF VALUES", selectedDeficiencyValue)
  console.log("DEFCIENCIES", selectedDeficiency)

  return (
    <>
      <SubForm columns={2}>
        <ItemYesNo
          disabled={false}
          label="Deficiência adquirida?"
          name="deficiencyAcquired"
        />

        <ItemSelect
          disabled={false}
          name="deficiency"
          options={deficiencyTypes.map(({ label, value }) => ({ label, value }))}
          label="Selecione o tipo da deficiência"
          placeholder="Selecione aqui..."
        />

        {selectedDeficiency && selectedDeficiency.forms.length > 0 && (
          <ItemSelect
            disabled={false}
            name="formTypeDeficiency"
            options={selectedDeficiency?.forms?.map(({ label, value }) => ({ label, value }))}
            label="Grau/Forma da deficiência"
            placeholder="Selecione aqui..."
          />
        )}
      </SubForm>

      {/* Setor de Escolaridade */}
      <h3>Escolaridade</h3>
      <SubForm columns={2}>

        <ItemInput disabled={false} name="" label="Acesso à escola" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="" label="Nome da escola" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="" label="Tipo da escola e classe" placeholder="Digite aqui..." />

        <ItemYesNo disabled={false} name="" label="Frequenta classe comum do ensino regular?" />

        <ItemInput disabled={false} name="" label="Onde frequenta atendimento educacional especializado?" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="" label="Qual ano/ciclo?" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="" label="Frequência (dias por semana)" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="" label="Tempo de trajeto casa/escola" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Transporte e Acessibilidade */}
      <h3>Transporte e Acessibilidade</h3>
      <SubForm columns={2}>

        <ItemYesNo disabled={false} name="" label="Necessita de companhia para o trajeto?" />

        <ItemYesNo disabled={false} name="" label="Existe falta de acessibilidade no caminho?" />

        <ItemInput disabled={false} name="" label="Outras barreiras no caminho" placeholder="Descreva aqui..." />

        <ItemYesNo disabled={false} name="" label="Transporte escolar apropriado/acessível?" />

        <ItemInput disabled={false} name="" label="Tipo de transporte escolar" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Cuidados Pessoais e Interações */}
      <h3>Cuidados Pessoais e Interações</h3>
      <SubForm columns={2}>

        <ItemYesNo disabled={false} name="" label="Profissional de apoio na escola?" />

        <ItemYesNo disabled={false} name="" label="Precisa de apoio extra nas atividades diárias?" />

        <ItemYesNo disabled={false} name="" label="Barreiras físicas na escola?" />

        <ItemYesNo disabled={false} name="" label="Brinca/diverte-se com outras crianças?" />

        <ItemYesNo disabled={false} name="" label="Possui cuidador?" />

        <ItemInput disabled={false} name="" label="Quem é o cuidador principal?" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Benefícios e Serviços Públicos */}
      <h3>Benefícios e Serviços Públicos</h3>
      <SubForm columns={2}>

        <ItemInput disabled={false} name="" label="Benefícios recebidos pela família" placeholder="Digite aqui..." />

        <ItemYesNo disabled={false} name="" label="Transporte público é gratuito?" />

        <ItemYesNo disabled={false} name="" label="Transporte público acessível?" />

        <ItemInput disabled={false} name="" label="Área da residência" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="" label="Condições de moradia" placeholder="Descreva aqui..." />

      </SubForm>
    </>
  );
};

import React from "react";

import ItemInput from "components/FormItems/ItemInput";
import ItemDatePicker from "components/FormItems/ItemDatePicker";
import ItemSelect from "components/FormItems/ItemSelect";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { SubForm } from "components/common/Form/SubForm";
import { useFormContext } from "react-hook-form"


export const PersonalRegister = () => {
  const { watch } = useFormContext();

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

      <SubForm columns={4}>
        <ItemInput
          disabled={false}
          label="N° Beneficio BPC"
          name="bpc"
          placeholder="Digite aqui..."
        />

        <ItemInput
          disabled={false}
          label="NIT"
          name="nit"
          placeholder="Digite aqui..."
        />

        <ItemInput
          disabled={false}
          label="N° Cartão SUS"
          name="sus"
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
            { label: "Masculino", value: "Masculino" },
            { label: "Feminino", value: "Feminino" },
            { label: "Outro", value: "Outro" },
            { label: "Prefiro não declarar", value: "NOTDECLARE" },
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
            { label: "Ensino Fundamental", value: "EnsinoFundamental" },
            { label: "Ensino Médio", value: "EnsinoMédio" },
            { label: "Ensino Superior", value: "EnsinoSuperior" },
            { label: "Pós-Graduação", value: "PosGraduacao" },
            // {
            //   label: "Ensino Fundamental I Completo",
            //   value: "Ensino Fundamental I Completo",
            // },
            // {
            //   label: "Ensino Fundamental I Incompleto",
            //   value: "Ensino Fundamental I Incompleto",
            // },
            // {
            //   label: "Ensino Fundamental II Completo",
            //   value: "Ensino Fundamental II Completo",
            // },
            // {
            //   label: "Ensino Fundamental II Incompleto",
            //   value: "Ensino Fundamental II Incompleto",
            // },
            // {
            //   label: "Ensino Médio Completo",
            //   value: "Ensino Médio Completo",
            // },
            // {
            //   label: "Ensino Médio Incompleto",
            //   value: "Ensino Médio Incompleto",
            // },
            // {
            //   label: "Ensino Superior Completo",
            //   value: "Ensino Superior Completo",
            // },
            // {
            //   label: "Ensino Superior Incompleto",
            //   value: "Ensino Superior Incompleto",
            // },
          ]}
          placeholder="Selecione aqui..."
        />

        <ItemSelect
          disabled={false}
          label="Raça/Cor"
          name="color"
          options={[
            { label: "Amarela", value: "yellow" },
            { label: "Branca", value: "white" },
            { label: "Indígena", value: "indigenous" },
            { label: "Parda", value: "brown" },
            { label: "Preta", value: "black" },
          ]}
          placeholder="Seelecione aqui..."
        />
      </SubForm>

      <SubForm columns={3}>
        <ItemYesNo disabled={false} label="Empregado?" name="isEmployee" />

        <ItemYesNo
          disabled={false}
          label="Utiliza transporte público?"
          name="isUsePublicTransport"
        />

        <ItemYesNo
          disabled={false}
          label="Possui filhos?"
          name="hasSons"
        />
      </SubForm>

      <div style={{ display: watch("neededAssistency") === true ? "" : "none" }}>
        Informações do auxiliar:
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

        <SubForm columns={4}>
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
              { label: "Masculino", value: "Masculino" },
              { label: "Feminino", value: "Feminino" },
              { label: "Outro", value: "Outro" },
              { label: "Prefiro não declarar", value: "NOTDECLARE" },
            ]}
            placeholder="Selecione aqui..."
          />
          <ItemSelect
            disabled={false}
            label="Vínculo familiar"
            name="familyBond"
            options={[
              { "label": "Pai/Mãe", "value": "pai_mae" },
              { "label": "Filho/Filha", "value": "filho_filha" },
              { "label": "Cônjuge/Parceiro(a)", "value": "conjuge_parceiro" },
              { "label": "Irmão/Irmã", "value": "irmao_irma" },
              { "label": "Avô/Avó", "value": "avo_avo" },
              { "label": "Neto/Neta", "value": "neto_neta" },
              { "label": "Tio/Tia", "value": "tio_tia" },
              { "label": "Sobrinho/Sobrinha", "value": "sobrinho_sobrinha" },
              { "label": "Primo/Prima", "value": "primo_prima" },
              { "label": "Enteado/Enteada", "value": "enteado_enteada" },
              { "label": "Padrasto/Madrasta", "value": "padrasto_madrasta" },
              { "label": "Genro/Nora", "value": "genro_nora" },
              { "label": "Sogro/Sogra", "value": "sogro_sogra" },
              { "label": "Cunhado/Cunhada", "value": "cunhado_cunhada" },
              { "label": "Bisavô/Bisavó", "value": "bisavo_bisavo" },
              { "label": "Bisneto/Bisneta", "value": "bisneto_bisneta" },
              { "label": "Amigo(a) Próximo(a)", "value": "amigo_proximo" },
              { "label": "Tutor(a) Legal", "value": "tutor_legal" },
              { "label": "Guarda/Responsável", "value": "guarda_responsavel" },
              { "label": "Outro", "value": "outro" }
            ]}
            placeholder="Selecione aqui..."
          />
        </SubForm>
      </div>
    </>


  );
};

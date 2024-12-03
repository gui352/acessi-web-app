import React from "react";

import ItemInput from "components/FormItems/ItemInput";
import ItemDatePicker from "components/FormItems/ItemDatePicker";
import ItemSelect from "components/FormItems/ItemSelect";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { SubForm } from "components/common/Form/SubForm";
import { useFormContext } from "react-hook-form"
import { isValidCPF } from "..";


export const PersonalRegister = () => {
  const { watch } = useFormContext();

  return (
    <>
      <ItemInput
        disabled={false}
        label="Nome completo"
        name="namePCD"
        placeholder="Digite aqui..."
        required={true}
      />
      <ItemInput
        disabled={false}
        label="E-mail"
        name="emailPCD"
        type={"email"}
        placeholder="Digite aqui..."
        required={true}
      />

      <SubForm columns={2}>
        <ItemInput
          disabled={false}
          label="CPF"
          name="cpfPCD"
          placeholder="Digite aqui..."
          mask="999.999.999-99"
          validate={(value) => isValidCPF(value) || "CPF inválido"}
          required={true}
        />
        <ItemInput
          disabled={false}
          label="Telefone"
          name="telephonePCD"
          placeholder="Digite aqui..."
          type="tel"
          mask="+55 (99) 99999-9999"
          required={true}
        />
      </SubForm>

      <SubForm columns={4}>
        <ItemInput
          disabled={false}
          label="N° Beneficio BPC"
          name="bpcNumber"
          placeholder="Digite aqui..."
          mask="9999 9999 9999 9999"
        />

        <ItemInput
          disabled={false}
          label="NIT"
          name="nit"
          placeholder="Digite aqui..."
          mask="999.99999.99-9"
        />

        <ItemInput
          disabled={false}
          label="N° Cartão SUS"
          name="susNumber"
          placeholder="Digite aqui..."
          mask="999 9999 9999 9999"
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemDatePicker
          disabled={false}
          label="Data de nascimento"
          name="birthDatePCD"
          placeholder="Selecione aqui..."
          required={true}
        />
        <ItemSelect
          disabled={false}
          label="Gênero"
          name="genderPCD"
          options={[
            { label: "Masculino", value: "Masculino" },
            { label: "Feminino", value: "Feminino" },
            { label: "Outro", value: "Outro" },
            { label: "Prefiro não declarar", value: "NOTDECLARE" },
          ]}
          placeholder="Selecione aqui..."
          required={true}
        />
      </SubForm>

      <SubForm columns={2}>
        <ItemSelect
          disabled={false}
          label="Grau de escolaridade"
          name="educationLevelPCD"
          options={[
            { label: "Analfabeto", value: "Analfabeto" },
            { label: "Ensino Fundamental", value: "EnsinoFundamental" },
            { label: "Ensino Médio", value: "EnsinoMedio" },
            { label: "Ensino Superior", value: "EnsinoSuperior" },
            { label: "Pós-Graduação", value: "PosGraduacao" },
          ]}
          placeholder="Selecione aqui..."
          required={true}
        />

        <ItemSelect
          disabled={false}
          label="Raça/Cor"
          name="race"
          options={[
            { label: "Amarela", value: "Amarela" },
            { label: "Branca", value: "Branca" },
            { label: "Indígena", value: "Indigena" },
            { label: "Parda", value: "Parda" },
            { label: "Preta", value: "Preta" },
            { label: "Prefiro não declarar", value: "NotDeclared" }
          ]}
          placeholder="Seelecione aqui..."
          required={true}
        />
      </SubForm>

      <SubForm columns={3}>
        <ItemYesNo disabled={false} label="*Empregado?" name="employee" required={true} />

        <ItemYesNo
          disabled={false}
          label="*Utiliza transporte público?"
          name="publicTransportation"
        />

        <ItemYesNo
          disabled={false}
          label="*Possui filhos?"
          name="hasSons"
        />
      </SubForm>

      <div style={{ display: watch("neededAssistency") === true ? "" : "none" }}>
        <h3>Informações do auxiliar:</h3>
        <ItemInput
          disabled={false}
          label="Nome"
          name="auxiliarPCD.nameAuxiliar"
          placeholder="Digite aqui..."
        />
        <ItemInput
          disabled={false}
          label="E-mail"
          name="auxiliarPCD.emailAuxiliar"
          type={"email"}
          placeholder="Digite aqui..."
        />

        <SubForm columns={2}>
          <ItemInput
            disabled={false}
            label="CPF"
            name="auxiliarPCD.cpfAuxiliar"
            placeholder="Digite aqui..."
            mask="999.999.999-99"
          />
          <ItemInput
            disabled={false}
            label="Telefone"
            name="auxiliarPCD.phoneAuxiliar"
            placeholder="Digite aqui..."
            mask="+55 (99) 99999-9999"
          />
        </SubForm>

        <SubForm columns={4}>
          <ItemDatePicker
            disabled={false}
            label="Data de nascimento"
            name="auxiliarPCD.birthDateAuxiliar"
            placeholder="Selecione aqui..."
          />
          <ItemSelect
            disabled={false}
            label="Gênero"
            name="auxiliarPCD.genderAuxiliar"
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
            name="auxiliarPCD.familyBond"
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

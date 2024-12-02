import React from "react";

import ItemSelect from "components/FormItems/ItemSelect";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { SubForm } from "components/common/Form/SubForm";
import { useFormContext } from "react-hook-form";
import ItemInput from "components/FormItems/ItemInput";

export const DeficiencyRegister = () => {

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
    if (selectedDeficiency && selectedDeficiency.forms?.length === 0) {
      resetField("formTypeDeficiency");
    }
  }, [selectedDeficiency, resetField]);

  return (
    <>
      <SubForm columns={3}>
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

        {selectedDeficiency && selectedDeficiency.forms?.length > 0 && (
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

        <ItemYesNo disabled={false} name="accessSchool" label="Acesso à escola?" />

        <ItemInput disabled={false} name="schoolName" label="Nome da escola" placeholder="Digite aqui..." />

        <ItemSelect options={[
          { label: "Escola pública", value: "ESCOLA_PUBLICA" },
          { label: "Escola privada", value: "ESCOLA_PRIVADA" },
          { label: "Escola comunitária", value: "ESCOLA_COMUNITARIA" },
          { label: "Escola filantrópica", value: "ESCOLA_FILANTROPICA" },
          { label: "Classe regular", value: "CLASSE_REGULAR" },
          { label: "Classe especial", value: "CLASSE_ESPECIAL" },
          { label: "EJA (Educação de Jovens e Adultos)", value: "EJA" },
          { label: "Outro", value: "OUTRO" }
        ]} disabled={false} name="schoolType" label="Tipo da escola e classe" placeholder="Digite aqui..." />

        <ItemYesNo disabled={false} name="regularEducationClass" label="Frequenta classe comum do ensino regular?" />

        <ItemInput disabled={false} name="specializedEducationalService" label="Onde frequenta atendimento educacional especializado?" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="yearCicle" label="Qual ano/ciclo?" placeholder="Digite aqui..." />

        <ItemInput type={"number"} disabled={false} name="frequencyDaysWeek" label="Frequência (dias por semana)" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="travelTime" label="Tempo de trajeto casa/escola" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Transporte e Acessibilidade */}
      <h3>Transporte e Acessibilidade</h3>
      <SubForm columns={2}>

        <ItemYesNo disabled={false} name="needsCompany" label="Necessita de companhia para o trajeto?" />

        <ItemYesNo disabled={false} name="lackOfAccessibilityWay" label="Existe falta de acessibilidade no caminho?" />

        <ItemInput disabled={false} name="barriersWay" label="Outras barreiras no caminho" placeholder="Descreva aqui..." />

        <ItemYesNo disabled={false} name="affordableTransportations" label="Transporte escolar apropriado/acessível?" />

        <ItemSelect options={[
          { label: "Transporte escolar público", value: "TRANSPORTE_ESCOLAR_PUBLICO" },
          { label: "Transporte escolar privado", value: "TRANSPORTE_ESCOLAR_PRIVADO" },
          { label: "Transporte familiar", value: "TRANSPORTE_FAMILIAR" },
          { label: "Transporte coletivo urbano", value: "TRANSPORTE_COLETIVO_URBANO" },
          { label: "Outro", value: "OUTRO" }
        ]} disabled={false} name="typeTransportation" label="Tipo de transporte escolar" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Cuidados Pessoais e Interações */}
      <h3>Cuidados Pessoais e Interações</h3>
      <SubForm columns={2}>

        <ItemYesNo disabled={false} name="hasSupportProfessional" label="Possui profissional de apoio na escola?" />

        <ItemYesNo disabled={false} name="needsSupportExtraActivities" label="Precisa de apoio extra nas atividades diárias?" />

        <ItemYesNo disabled={false} name="physicalBarriersSchool" label="Possui barreiras físicas na escola?" />

        <ItemYesNo disabled={false} name="playWithColleagues" label="Brinca/diverte-se com outros colegas?" />

        <ItemYesNo disabled={false} name="hasCaregiver" label="Possui cuidador?" />

        <ItemSelect options={[
          { label: "Pai", value: "PAI" },
          { label: "Mãe", value: "MAE" },
          { label: "Avô/Avó", value: "AVO_AVO" },
          { label: "Irmão/Irmã", value: "IRMAO_IRMA" },
          { label: "Tio/Tia", value: "TIO_TIA" },
          { label: "Cônjuge/Parceiro(a)", value: "CONJUGE_PARCEIRO" },
          { label: "Amigo(a)", value: "AMIGO" },
          { label: "Vizinho(a)", value: "VIZINHO" },
          { label: "Cuidador Profissional", value: "CUIDADOR_PROFISSIONAL" },
          { label: "Outro", value: "OUTRO" }
        ]} disabled={false} name="primaryCaregiver" label="Quem é o cuidador principal?" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Benefícios e Serviços Públicos */}
      <h3>Benefícios e Serviços Públicos</h3>
      <SubForm columns={2}>

        <ItemSelect options={[
          { label: "Bolsa Família", value: "BOLSA_FAMILIA" },
          { label: "Auxílio Emergencial", value: "AUXILIO_EMERGENCIAL" },
          { label: "Auxílio Gás", value: "AUXILIO_GAS" },
          { label: "Aposentadoria", value: "APOSENTADORIA" },
          { label: "Pensão por Morte", value: "PENSAO_POR_MORTE" },
          { label: "Benefício de Prestação Continuada (BPC)", value: "BPC" },
          { label: "Seguro-Desemprego", value: "SEGURO_DESEMPREGO" },
          { label: "Auxílio-Inclusão", value: "AUXILIO_INCLUSAO" },
          { label: "Isenção Tarifária de Energia Elétrica", value: "ISENCAO_TARIFARIA" },
          { label: "Vale-Alimentação", value: "VALE_ALIMENTACAO" },
          { label: "Auxílio Reabilitação Psicossocial", value: "AUXILIO_REABILITACAO_PSICOSSOCIAL" },
          { label: "Bolsa-Escola Municipal", value: "BOLSA_ESCOLA_MUNICIPAL" },
          { label: "Benefício de Sindicato", value: "BENEFICIO_SINDICATO" },
          { label: "Benefício de ONG", value: "BENEFICIO_ONG" },
          { label: "Benefício da Igreja", value: "BENEFICIO_IGREJA" },
          { label: "PETI", value: "PETI" },
          { label: "Renda Mensal Vitalícia", value: "RENDA_MENSAL_VITALICIA" },
          { label: "BPC-Pessoa com Deficiência", value: "BPC_PESSOA_DEFICIENCIA" },
          { label: "BPC-Idoso", value: "BPC_IDOSO" },
          { label: "Nenhum", value: "NENHUM" },
          { label: "Outro", value: "OUTRO" }
        ]} disabled={false} name="benefitsRecived" label="Benefícios recebidos pela família" placeholder="Selecione aqui..." />

        <ItemYesNo disabled={false} name="freePublicTransport" label="Transporte público é gratuito?" />

        <ItemYesNo disabled={false} name="accessiblePublicTransport" label="Transporte público acessível?" />

        <ItemSelect options={[{ label: "Rural", value: "RURAL" }, { label: "Urbana", value: "URBANA" }]} disabled={false} name="areaResidence" label="Área da residência" placeholder="Selecione aqui..." />

        <ItemSelect options={[
          { label: "Casa própria", value: "CASA_PROPRIA" },
          { label: "Casa alugada", value: "CASA_ALUGADA" },
          { label: "Casa cedida", value: "CASA_CEDIDA" },
          { label: "Casa financiada", value: "CASA_FINANCIADA" },
          { label: "Barraco", value: "BARRACO" },
          { label: "Ocupação irregular", value: "OCUPACAO_IRREGULAR" },
          { label: "Alojamento coletivo", value: "ALOJAMENTO_COLETIVO" },
          { label: "Em situação de rua", value: "SITUACAO_RUA" },
          { label: "Outro", value: "OUTRO" }
        ]} disabled={false} name="housingConditions" label="Condições de moradia" placeholder="Selecione aqui..." />

      </SubForm>
    </>
  );
};

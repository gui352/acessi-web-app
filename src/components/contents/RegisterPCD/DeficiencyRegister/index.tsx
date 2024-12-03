import React from "react";

import ItemSelect from "components/FormItems/ItemSelect";
import ItemYesNo from "components/FormItems/ItemYesNo";
import { SubForm } from "components/common/Form/SubForm";
import { useFormContext } from "react-hook-form";
import ItemInput from "components/FormItems/ItemInput";
import ItemNumber from "components/FormItems/ItemNumber";

export const DeficiencyRegister = () => {

  const { watch, resetField } = useFormContext();

  const deficiencyTypes = [
    { label: "Deficiência Múltipla", value: "DEFICIENCIA_MULTIPLA" },
    { label: "Cegueira", value: "CEGUEIRA", forms: [] },
    { label: "Baixa Visão", value: "BAIXA_VISAO", forms: [] },
    { label: "Surdez", value: "SURDEZ", forms: [] },
    { label: "Deficiência Auditiva", value: "DEFICIENCIA_AUDITIVA", forms: [] },
    { label: "Surdocegueira", value: "SURDOCEGUEIRA", forms: [] },
    {
      label: "Deficiência Física",
      value: "DEFICIENCIA_FISICA",
      forms: [
        { label: "Paraplegia/Paraparesia", value: "PARAPLEGIA_PARAPARESIA" },
        { label: "Tetraplegia/Tetraparesia", value: "TETRAPLEGIA_TETRAPARESIA" },
        { label: "Monoplegia/Monoparesia", value: "MONOPLEGIA_MONOPARESIA" },
        { label: "Hemiplegia/Hemiparesia", value: "HEMIPLEGIA_HEMIPARESIA" },
        { label: "Amputação/Ausência de Membros", value: "AMPUTACAO_AUSENCIA" },
        { label: "Paralisia Cerebral", value: "PARALISIA_CEREBRAL" },
        { label: "Nanismo", value: "NANISMO" },
        { label: "Ostomia", value: "OSTOMIA" },
        { label: "Deformidades no Corpo", value: "DEFORMIDADES_CORPO" }
      ]
    },
    { label: "Deficiência Mental/Intelectual", value: "DEFICIENCIA_MENTAL", forms: [] },
    {
      label: "Transtornos Globais do Desenvolvimento",
      value: "TRANSTORNOS_DESENVOLVIMENTO",
      forms: [
        { label: "Autismo", value: "AUTISMO" },
        { label: "Psicose Infantil", value: "PSICOSE_INFANTIL" },
        { label: "Síndrome de Kanner", value: "SINDROME_KANNER" },
        { label: "Síndrome de Rett", value: "SINDROME_RETT" },
        { label: "Síndrome de Asperger", value: "SINDROME_ASPERGER" }
      ]
    },
    { label: "Síndrome de Down", value: "SINDROME_DOWN", forms: [] },
    { label: "Doenças Crônicas/Degenerativas", value: "DOENCAS_CRONICAS", forms: [] }
  ];

  const selectedDeficiencyValue = watch("informationDeficiency.deficiency");
  const selectedDeficiency = deficiencyTypes.find(
    (def) => def.value === selectedDeficiencyValue
  );

  React.useEffect(() => {
    if (selectedDeficiency && selectedDeficiency.forms?.length === 0) {
      resetField("informationDeficiency.deficiency");
    }
  }, [selectedDeficiency, resetField]);

  return (
    <>
      <SubForm columns={3}>
        <ItemYesNo
          disabled={false}
          label="Deficiência adquirida?"
          name="informationDeficiency.deficiencyAcquired"
        />

        <ItemSelect
          disabled={false}
          name="informationDeficiency.deficiency"
          options={deficiencyTypes.map(({ label, value }) => ({ label, value }))}
          label="Selecione o tipo da deficiência"
          placeholder="Selecione aqui..."
          required={true}
        />

        {selectedDeficiency && selectedDeficiency.forms?.length > 0 && (
          <ItemSelect
            disabled={false}
            name="informationDeficiency.formTypeDeficiency"
            options={selectedDeficiency?.forms?.map(({ label, value }) => ({ label, value }))}
            label="Grau/Forma da deficiência"
            placeholder="Selecione aqui..."
          />
        )}
      </SubForm>

      {/* Setor de Escolaridade */}
      <h3>Escolaridade</h3>
      <SubForm columns={2}>

        <ItemYesNo disabled={false} name="informationDeficiency.accessSchool" label="Acesso à escola?" />

        <ItemInput disabled={false} name="informationDeficiency.schoolName" label="Nome da escola" placeholder="Digite aqui..." />

        <ItemSelect options={[
          { label: "Escola pública", value: "ESCOLA_PUBLICA" },
          { label: "Escola privada", value: "ESCOLA_PRIVADA" },
          { label: "Escola comunitária", value: "ESCOLA_COMUNITARIA" },
          { label: "Escola filantrópica", value: "ESCOLA_FILANTROPICA" },
          { label: "Classe regular", value: "CLASSE_REGULAR" },
          { label: "Classe especial", value: "CLASSE_ESPECIAL" },
          { label: "EJA (Educação de Jovens e Adultos)", value: "EJA" },
          { label: "Outro", value: "OUTRO" }
        ]} disabled={false} name="informationDeficiency.schoolType" label="Tipo da escola e classe" placeholder="Digite aqui..." />

        <ItemYesNo disabled={false} name="informationDeficiency.regularEducationClass" label="Frequenta classe comum do ensino regular?" />

        <ItemInput disabled={false} name="informationDeficiency.specializedEducationalService" label="Onde frequenta atendimento educacional especializado?" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="informationDeficiency.yearCicle" label="Qual ano/ciclo?" placeholder="Digite aqui..." />

        <ItemNumber max={7} disabled={false} name="informationDeficiency.frequencyDaysWeek" label="Frequência (dias por semana)" placeholder="Digite aqui..." />

        <ItemInput disabled={false} name="informationDeficiency.travelTime" label="Tempo de trajeto casa/escola" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Transporte e Acessibilidade */}
      <h3>Transporte e Acessibilidade</h3>
      <SubForm columns={2}>

        <ItemYesNo disabled={false} name="informationDeficiency.needsCompany" label="Necessita de companhia para o trajeto?" />

        <ItemYesNo disabled={false} name="informationDeficiency.lackOfAccessibilityWay" label="Existe falta de acessibilidade no caminho?" />

        <ItemInput disabled={false} name="informationDeficiency.barriersWay" label="Outras barreiras no caminho" placeholder="Descreva aqui..." />

        <ItemYesNo disabled={false} name="informationDeficiency.affordableTransportations" label="Transporte escolar apropriado/acessível?" />

        <ItemSelect options={[
          { label: "Transporte escolar público", value: "TRANSPORTE_ESCOLAR_PUBLICO" },
          { label: "Transporte escolar privado", value: "TRANSPORTE_ESCOLAR_PRIVADO" },
          { label: "Transporte familiar", value: "TRANSPORTE_FAMILIAR" },
          { label: "Transporte coletivo urbano", value: "TRANSPORTE_COLETIVO_URBANO" },
          { label: "Outro", value: "OUTRO" }
        ]} disabled={false} name="informationDeficiency.typeTransportation" label="Tipo de transporte escolar" placeholder="Digite aqui..." />
      </SubForm>

      {/* Setor de Cuidados Pessoais e Interações */}
      <h3>Cuidados Pessoais e Interações</h3>
      <SubForm columns={2}>

        <ItemYesNo disabled={false} name="informationDeficiency.hasSupportProfessional" label="Possui profissional de apoio na escola?" />

        <ItemYesNo disabled={false} name="informationDeficiency.needsSupportExtraActivities" label="Precisa de apoio extra nas atividades diárias?" />

        <ItemYesNo disabled={false} name="informationDeficiency.physicalBarriersSchool" label="Possui barreiras físicas na escola?" />

        <ItemYesNo disabled={false} name="informationDeficiency.playWithColleagues" label="Brinca/diverte-se com outros colegas?" />

        <ItemYesNo disabled={false} name="informationDeficiency.hasCaregiver" label="Possui cuidador?" />

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
        ]} disabled={false} name="informationDeficiency.primaryCaregiver" label="Quem é o cuidador principal?" placeholder="Digite aqui..." />
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
        ]} disabled={false} name="informationDeficiency.benefitsRecived" label="Benefícios recebidos pela família" placeholder="Selecione aqui..." />

        <ItemYesNo disabled={false} name="informationDeficiency.freePublicTransport" label="Transporte público é gratuito?" />

        <ItemSelect options={[{ label: "Rural", value: "RURAL" }, { label: "Urbana", value: "URBANA" }]} disabled={false} name="informationDeficiency.areaResidence" label="Área da residência" placeholder="Selecione aqui..." />

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
        ]} disabled={false} name="informationDeficiency.housingConditions" label="Condições de moradia" placeholder="Selecione aqui..." />

      </SubForm>
    </>
  );
};

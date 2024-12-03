import React, { useEffect, useRef, useState } from "react";

import { PersonalRegister } from "./PersonalRegister";
import { DeficiencyRegister } from "./DeficiencyRegister";

import { HeaderTitle } from "components/HeaderTitle";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { AdressRegister } from "./AdressRegister";
// import { DisabilityTypeService } from "../../../services/PCD/DisabilityTypeService";
import { PCDService } from "../../../services/PCD/PCDService";
import { PCDModel } from "../../../interfaces/PCD/PCDInterface";
import { AddressModel } from "../../../interfaces/Adress/AddressInterface";
import { Form } from "components/common/Form";
import ItemSelect from "components/FormItems/ItemSelect";
import { message } from "antd";
import ItemYesNo from "components/FormItems/ItemYesNo";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TermsOfAcceptance from "components/common/TermsAcceptance";
import ItemCheckbox from "components/FormItems/ItemCheckbox";

export const isValidCPF = (cpf: string): boolean => {
  if (!cpf || typeof cpf !== "string") return false;
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  let rest;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  return rest === parseInt(cpf.substring(10, 11));
};

const addressAuxiliar = z.object({
  cepAddress: z.string().nullish(),
  stateAddress: z.string().nullish(),
  cityAddress: z.string().nullish(),
  neighborhoodAddress: z.string().nullish(),
  streetAddress: z.string().nullish(),
  numberAddress: z.string().nullish(),
  complementAddress: z.string().nullish(),
});

const infosAuxiliar = z.object({
  nameAuxiliar: z.string().min(1, "Nome é obrigatório").nullish(),
  emailAuxiliar: z.string().email("E-mail inválido").nullish(),
  cpfAuxiliar: z.string().refine(isValidCPF, { message: "CPF inválido" }).nullish(),
  phoneAuxiliar: z.string().regex(/^\+55\s\(\d{2}\)\s\d{5}-\d{4}$/, "Telefone inválido").nullish(),
  birthDateAuxiliar: z.date().nullish(),
  genderAuxiliar: z.string().nullish(),
  familyBond: z.string().nullish(),
  addressAuxiliar: addressAuxiliar.nullish(),
  withPCD: z.boolean().nullish()
});

const addressPCD = z.object({
  cepAddress: z.string(),
  stateAddress: z.string(),
  cityAddress: z.string(),
  neighborhoodAddress: z.string(),
  streetAddress: z.string(),
  numberAddress: z.string(),
  complementAddress: z.string(),
});

const informationDeficiency = z.object({
  deficiencyAcquired: z.boolean().nullish(),
  deficiency: z.string().nullish(),
  formTypeDeficiency: z.string().nullish(),
  accessSchool: z.boolean().nullish(),
  schoolName: z.string().nullish(),
  schoolType: z.string().nullish(),
  regularEducationClass: z.boolean().nullish(),
  specializedEducationalService: z.string().nullish(),
  yearCicle: z.string().nullish(),
  frequencyDaysWeek: z.number().nullish(),
  travelTime: z.string().nullish(),
  needsCompany: z.boolean().nullish(),
  lackOfAccessibilityWay: z.boolean().nullish(),
  barriersWay: z.string().nullish(),
  affordableTransportations: z.boolean().nullish(),
  typeTransportation: z.string().nullish(),
  hasSupportProfessional: z.boolean().nullish(),
  needsSupportExtraActivities: z.boolean().nullish(),
  physicalBarriersSchool: z.boolean().nullish(),
  playWithColleagues: z.boolean().nullish(),
  hasCaregiver: z.boolean().nullish(),
  primaryCaregiver: z.string().nullish(),
  benefitsRecived: z.string().nullish(),
  freePublicTransport: z.boolean().nullish(),
  accessiblePublicTransport: z.boolean().nullish(),
  areaResidence: z.string().nullish(),
  housingConditions: z.string().nullish(),
});

const schema = z.object({
  namePCD: z.string().min(1, "Nome é obrigatório"),
  emailPCD: z.string().email("E-mail inválido"),
  cpfPCD: z.string().refine(isValidCPF, { message: "CPF inválido" }),
  telephonePCD: z.string().regex(/^\+55\s\(\d{2}\)\s\d{5}-\d{4}$/, "Telefone inválido"),
  bpcNumber: z.string().regex(/^\d{4} \d{4} \d{4} \d{4}$/, "Número do benefício BPC inválido").nullish(),
  nit: z.string().regex(/^\d{3}\.\d{5}\.\d{2}-\d{1}$/, "NIT inválido").nullish(),
  susNumber: z.string().regex(/^\d{3} \d{4} \d{4} \d{4}$/, "Número do benefício BPC inválido").nullish(),
  birthDatePCD: z.union([z.date(), z.null()]),
  genderPCD: z.string().nullish(),
  educationLevelPCD: z.string().nullish(),
  race: z.string().nullish(),
  employee: z.boolean().nullish(),
  publicTransportation: z.boolean().nullish(),
  hasSons: z.boolean().nullish(),
  neededAssistency: z.boolean(),
  termsAccepted: z.boolean(),
  auxiliarPCD: infosAuxiliar.nullish(),
  addressPCD: addressPCD,
  informationDeficiency: informationDeficiency.nullish(),
});

export const RegisterPCDComponent = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      namePCD: "",
      emailPCD: "",
      cpfPCD: "",
      telephonePCD: "",
      bpcNumber: null,
      nit: null,
      susNumber: null,
      birthDatePCD: null,
      genderPCD: "",
      educationLevelPCD: "",
      race: "",
      employee: false,
      publicTransportation: false,
      hasSons: false,
      neededAssistency: false,
      termsAccepted: false,
      addressPCD: {
        cepAddress: "",
        stateAddress: "",
        cityAddress: "",
        neighborhoodAddress: "",
        streetAddress: "",
        numberAddress: "",
        complementAddress: "",
      },
      informationDeficiency: {
        deficiencyAcquired: false,
        deficiency: "",
        formTypeDeficiency: "",
        accessSchool: false,
        schoolName: "",
        schoolType: "",
        regularEducationClass: false,
        specializedEducationalService: "",
        yearCicle: "",
        frequencyDaysWeek: "",
        travelTime: "",
        needsCompany: false,
        lackOfAccessibilityWay: false,
        barriersWay: "",
        affordableTransportations: false,
        typeTransportation: "",
        hasSupportProfessional: false,
        needsSupportExtraActivities: false,
        physicalBarriersSchool: false,
        playWithColleagues: false,
        hasCaregiver: false,
        primaryCaregiver: "",
        benefitsRecived: "",
        freePublicTransport: false,
        accessiblePublicTransport: false,
        areaResidence: "",
        housingConditions: "",
      },
    }
  });

  const { handleSubmit, control, reset } = methods;

  // const onSubmit = async (data) => {
  //   try {
  //     await schema.parseAsync(data);
  //     console.log("Dados validados:", data);
  //   } catch (error) {
  //     console.error("Erro de validação:", error.errors);
  //   }
  // };

  const onSubmit = (data) => {

    const sanitizeNumbers = (input) => input.replace(/\D/g, '');

    if (data.neededAssistency === false) {
      delete data.auxiliarPCD
    }

    const pcd: PCDModel = data;

    const dataFilters = {
      ...pcd,
      cpfPCD: sanitizeNumbers(pcd.cpfPCD),
      nit: sanitizeNumbers(pcd.nit),
      susNumber: sanitizeNumbers(pcd.susNumber),
      bpcNumber: sanitizeNumbers(pcd.bpcNumber),
      telephonePCD: sanitizeNumbers(pcd.telephonePCD)
    }

    // const auxiliarPCD = {
    //   nameAuxiliar: data.nameAuxiliar,
    //   emailAuxiliar: data.emailAuxiliar,
    //   cpfAuxiliar: data.cpfAuxiliar,
    //   phoneAuxiliar: data.phoneAuxiliar,
    //   birthAuxiliar: data.birthAuxiliar,
    //   genderAuxiliar: data.genderAuxiliar,
    //   familyBond: data.familyBond,
    //   addressAuxiliar: {
    //     withPCD: data.auxiliarPCD.addressAuxiliar.withPCD,
    //     cepAddress: data.auxiliarPCD.addressAuxiliar.cepAddress,
    //     stateAddress: data.auxiliarPCD.addressAuxiliar.stateAddress,
    //     cityAddress: data.auxiliarPCD.addressAuxiliar.cityAddress,
    //     neighborhoodAddress: data.auxiliarPCD.addressAuxiliar.neighborhoodAddress,
    //     streetAddress: data.auxiliarPCD.addressAuxiliar.streetAddress,
    //     numberHomeAddress: data.auxiliarPCD.addressAuxiliar.numberHomeAddress,
    //     complementAddress: data.auxiliarPCD.addressAuxiliar.complementAddress,
    //   }
    // }

    const pcdService = new PCDService();


    pcdService.CreateUser(dataFilters).then((res) => {
      if (res.status == 200) {
        message.open({
          type: "success",
          content: "Cadastro concluído com sucesso",
        });
        reset();
      } else {
        message.open({
          type: "error",
          content: "Erro ao cadastrar o PCD.",
        });
      }
    });
  };

  return (
    <div>
      <FormProvider control={control} {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HeaderTitle
            titleBold="Cadastro de pessoas com deficiência"
            displayFilters={false}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                width: "45%",
                color: "#3C4F82",
              }}
            >
              Está utilizando assistência para cadastrar?
            </h2>
            <ItemYesNo
              disabled={false}
              name="neededAssistency"
            />
          </div>

          <Accordion multiple style={{ marginBottom: 20 }}>
            <AccordionTab header="Cadastro Pessoal">
              <PersonalRegister />
            </AccordionTab>

            <AccordionTab header="Cadastro de Endereço">
              <AdressRegister />
            </AccordionTab>

            <AccordionTab header="Cadastro de Deficiência" key="3">
              <DeficiencyRegister />
            </AccordionTab>
          </Accordion>

          {/* <TermsOfAcceptance label="Aceito os termos e condições" name="termsAccepted" /> */}

          <ItemCheckbox
            label="Aceito os Termos e Condições"
            name="termsAccepted"
            required
            message="Você deve aceitar os termos." disabled={false} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              label="Salvar"
              className="p-button-raised p-button-text"
              style={{ background: "#3C4F82", color: "white" }}
            />
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

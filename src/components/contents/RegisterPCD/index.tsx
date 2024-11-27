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

const adressAuxiliar = z.object({
  withPCD: z.string().optional(),
  cepAuxiliar: z.string().optional(),
  stateAuxiliar: z.string().optional(),
  cityAuxiliar: z.string().optional(),
  neighborhoodAuxiliar: z.string().optional(),
  streetAuxiliar: z.string().optional(),
  numberHomeAuxiliar: z.string().optional(),
  complementAuxiliar: z.string().optional(),
});

const infosAuxiliar = z.object({
  nameAuxiliar: z.string().min(1, "Nome é obrigatório"),
  emailAuxiliar: z.string().email("E-mail inválido").optional(),
  cpfAuxiliar: z.string().refine(isValidCPF, { message: "CPF inválido" }),
  phoneAuxiliar: z.string().regex(/^\+55\s\(\d{2}\)\s\d{5}-\d{4}$/, "Telefone inválido"),
  birthAuxiliar: z.string().optional(),
  genderAuxiliar: z.string().optional(),
  familyBond: z.string().optional(),
  adressAuxiliar: adressAuxiliar
});

const adressPCD = z.object({
  cep: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  street: z.string().optional(),
  numberHome: z.string().optional(),
  complemente: z.string().optional(),
});

const aboutDeficiency = z.object({
  deficiencyAcquired: z.boolean().optional(),
  deficiency: z.string().optional(),
  formTypeDeficiency: z.string().optional(),
  accessSchool: z.string().optional(),
  schoolName: z.string().optional(),
  schoolType: z.string().optional(),
  regularEducationClass: z.boolean().optional(),
  specializedEducationalService: z.string().optional(),
  yearCicle: z.string().optional(),
  frequencyDaysWeek: z.string().optional(),
  travelTime: z.string().optional(),
  needsCompany: z.boolean().optional(),
  lackOfAccessibilityWay: z.boolean().optional(),
  barriersWay: z.string().optional(),
  affordableTransportations: z.boolean().optional(),
  typeTransportation: z.string().optional(),
  hasSupportProfessional: z.boolean().optional(),
  needsSupportExtraActivities: z.boolean().optional(),
  physicalBarriersSchool: z.boolean().optional(),
  playWithColleagues: z.boolean().optional(),
  hasCaregiver: z.boolean().optional(),
  primaryCaregiver: z.string().optional(),
  benefitsRecived: z.string().optional(),
  freePublicTransport: z.boolean().optional(),
  accessiblePublicTransport: z.boolean().optional(),
  areaResidence: z.string().optional(),
  housingConditions: z.string().optional(),
});

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido").optional(),
  cpf: z.string().refine(isValidCPF, { message: "CPF inválido" }),
  phone: z.string().regex(/^\+55\s\(\d{2}\)\s\d{5}-\d{4}$/, "Telefone inválido"),
  bpc: z.string().regex(/^\d{4}\ \d{4}\ \d{4}\ d{4}$/, "Número do benefício BPC inválido"),
  nit: z.string().regex(/^\d{3}\.\d{5}\.\d{2}-\d{1}$/, "NIT inválido"),
  sus: z.string().regex(/^\d{3}\ \d{4}\ \d{4}\ d{4}$/, "Número do SUS inválido"),
  birth: z.string().optional(),
  gender: z.string().optional(),
  education: z.string().optional(),
  color: z.string().optional(),
  isEmployee: z.boolean().optional(),
  isUsePublicTransport: z.boolean().optional(),
  hasSons: z.boolean().optional(),
  neededAssistency: z.boolean().optional(),
  auxiliarPCD: infosAuxiliar,
  adressPCD: adressPCD,
  aboutDeficiency: aboutDeficiency,
});

export const RegisterPCDComponent = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      phone: "",
      bpc: "",
      nit: "",
      sus: "",
      gender: "",
      education: "",
      color: "",
      isEmployee: false,
      isUsePublicTransport: false,
      hasSons: false,
      neededAssistency: false,
    }
  });

  const { handleSubmit, control, reset } = methods;
  const toastRef = useRef(null);

  const onSubmit = (data) => {
    console.log("Testando data", data);

    const pcd: PCDModel = {
      bpc: data.bpc,
      nit: data.nit,
      sus: data.sus,
      color: data.color,
      isEmployee: data.isEmployee,
      isUsePublicTransport: data.isUsePublicTransport,
      hasSons: data.hasSons,
      neededAssistency: data.neededAssistency,
      namePCD: data.name,
      cpfPCD: data.cpf,
      birthDatePCD: data.birth,
      telephonePCD: data.phone,
      emailPCD: data.email,
      genderPCD: data.gender,
      educationLevelPCD: data.education,
      employee: data.isEmployee,
      publicTransportation: data.isUsePublicTransport,
      disabilityTypePCD: data.deficiency,
      addressPCD: {
        cityAddress: data.city,
        streetAddress: data.street,
        neighborhoodAddress: data.neighborhood,
        numberAddress: data.numberHome,
        complementAddress: data.complement,
        cepAddress: data.cep,
      } as AddressModel,
      aboutDeficiency: {
        deficiencyAcquired: data.deficiencyAcquired,
        deficiency: data.deficiency,
        formTypeDeficiency: data.formTypeDeficiency,
        accessSchool: data.accessSchool,
        schoolName: data.schoolName,
        schoolType: data.schoolType,
        regularEducationClass: data.regularEducationClass,
        specializedEducationalService: data.specializedEducationalService,
        yearCicle: data.yearCicle,
        frequencyDaysWeek: data.frequencyDaysWeek,
        travelTime: data.travelTime,
        needsCompany: data.needsCompany,
        lackOfAccessibilityWay: data.lackOfAccessibilityWay,
        barriersWay: data.barriersWay,
        affordableTransportations: data.affordableTransportations,
        typeTransportation: data.typeTransportation,
        hasSupportProfessional: data.hasSupportProfessional,
        needsSupportExtraActivities: data.needsSupportExtraActivities,
        physicalBarriersSchool: data.physicalBarriersSchool,
        playWithColleagues: data.playWithColleagues,
        hasCaregiver: data.hasCaregiver,
        primaryCaregiver: data.primaryCaregiver,
        benefitsRecived: data.benefitsRecived,
        freePublicTransport: data.freePublicTransport,
        accessiblePublicTransport: data.accessiblePublicTransport,
        areaResidence: data.areaResidence,
        housingConditions: data.housingConditions,
      }
    };

    const auxiliarPCD = {
      nameAuxiliar: data.nameAuxiliar,
      emailAuxiliar: data.emailAuxiliar,
      cpfAuxiliar: data.cpfAuxiliar,
      phoneAuxiliar: data.phoneAuxiliar,
      birthAuxiliar: data.birthAuxiliar,
      genderAuxiliar: data.genderAuxiliar,
      familyBond: data.familyBond,
      adressAuxiliar: {
        withPCD: data.withPCD,
        cepAuxiliar: data.cepAuxiliar,
        stateAuxiliar: data.stateAuxiliar,
        cityAuxiliar: data.cityAuxiliar,
        neighborhoodAuxiliar: data.neighborhoodAuxiliar,
        streetAuxiliar: data.streetAuxiliar,
        numberHomeAuxiliar: data.numberHomeAuxiliar,
        complementAuxiliar: data.complementAuxiliar,
      }
    }

    const pcdService = new PCDService();

    pcdService.CreateUser(pcd).then((res) => {
      console.log(res);
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

  const [disabilityType, setDisabilityType] = useState([]);

  // useEffect(() => {
  //   disabilityTypeService.GetType().then((res) => {
  //     const types = [];
  //     for (const type in res.data) {
  //       types.push({ value: type, label: res.data[type] });
  //     }
  //     setDisabilityType(types);
  //   });
  // }, []);

  // const onSubmit = (data) => console.log(data);

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
              // label="Está utilizando assistência para cadastrar?"
              name="neededAssistency"
            />

            {/* <h2
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                width: "45%",
                color: "#3C4F82",
              }}
            >
              Para iniciar, selecione o seu tipo de deficiência:
            </h2> */}

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

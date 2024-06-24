import React, { useEffect, useRef, useState } from "react";

import { PersonalRegister } from "./PersonalRegister";
import { DeficiencyRegister } from "./DeficiencyRegister";

import { HeaderTitle } from "components/HeaderTitle";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { AdressRegister } from "./AdressRegister";
import { DisabilityTypeService } from "../../../services/PCD/DisabilityTypeService";
import { PCDService } from "../../../services/PCD/PCDService";
import { PCDModel } from "../../../interfaces/PCD/PCDInterface";
import { AddressModel } from "../../../interfaces/Adress/AddressInterface";
import { Form } from "components/common/Form";
import ItemSelect from "components/FormItems/ItemSelect";

export const RegisterPCDComponent = () => {
  const [selectedDeficiency, setSelectedDeficiency] = React.useState(null);
  const disabilityTypeService = new DisabilityTypeService();

  const deficiency = [
    { label: "Auditiva", value: "Auditiva" },
    { label: "Visual", value: "Visual" },
    { label: "Física", value: "Física" },
    { label: "Intelectual", value: "Intelectual" },
    { label: "Múltipla", value: "Múltipla" },
    { label: "Outra", value: "Outra" },
  ];

  const { handleSubmit, control } = useForm();
  const toastRef = useRef(null);

  const onSubmit = (data) => {
    console.log(data);

    const pcd: PCDModel = {
      namePCD: data.name,
      cpfPCD: data.cpf,
      birthDatePCD: data.birth,
      telephonePCD: data.phone,
      emailPCD: data.email,
      genderPCD: data.gender,
      educationLevelPCD: data.education,
      employee: data.isEmployee,
      publicTransportation: data.isUsePublicTransport,
      disabilityTypePCD: "AUDITIVA",
      addressPCD: {
        cityAddress: data.city,
        streetAddress: data.street,
        neighborhoodAddress: data.neighborhood,
        numberAddress: data.numberHome,
        complementAddress: data.complement,
        cepAddress: data.cep,
      } as AddressModel,
    };

    const pcdService = new PCDService();

    pcdService.CreateUser(pcd).then((res) => {
      console.log(res);
      // if (res.status == 200) {
      //   messageApi.open({
      //     type: "success",
      //     content: "Cadastro concluído com sucesso",
      //   });
      // }
    });
  };

  const methods = useFormContext();
  const [disabilityType, setDisabilityType] = useState([]);

  useEffect(() => {
    disabilityTypeService.GetType().then((res) => {
      const types = [];
      for (const type in res.data) {
        types.push({ value: type, label: res.data[type] });
      }
      setDisabilityType(types);
    });
  }, []);

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
              Para iniciar, selecione o seu tipo de deficiência:
            </h2>
            <ItemSelect
              disabled={false}
              name="deficiency"
              options={deficiency}
              placeholder="Selecione aqui..."
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

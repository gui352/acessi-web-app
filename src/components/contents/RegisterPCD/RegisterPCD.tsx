import React from "react";

import { PersonalRegister } from "./PersonalRegister";
import { AdressRegister } from "./AdressRegister";
import { HeaderTitle } from "components/HeaderTitle";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";

export const RegisterPCDComponent = () => {
  const [selectedCity, setSelectedCity] = React.useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...control}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <h4
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                width: "25%",
                color: "#3C4F82",
              }}
            >
              Para iniciar, selecione o seu tipo de deficiência:
            </h4>
            <Dropdown
              value={selectedCity}
              options={cities}
              onChange={(e) => setSelectedCity(e.value)}
              optionLabel="name"
              placeholder="Selecione uma cidade"
              style={{ width: "25%", marginBottom: 16 }}
            />
          </div>

          <Accordion multiple style={{ marginBottom: 20 }}>
            <AccordionTab header="Cadastro Pessoal">
              <PersonalRegister />
            </AccordionTab>
            <AccordionTab header="Cadastro de Endereço">
              <AdressRegister />
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
        </form>
      </FormProvider>
    </div>
  );
};

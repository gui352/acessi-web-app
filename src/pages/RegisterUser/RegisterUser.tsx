import React, { useState } from "react";
import ImagemEsquerda from "../../images/imagemEsquerda.png";
import AcessiLogo from "../../images/acessiLogo.png";
import { Field, Form } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

export const RegisterUser = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (data: any, form: any) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const validate = (data: any) => {
    let erros: any = {};

    if (!data.name) {
      erros.name = "Nome é obrigatório.";
    }

    if (!data.email) {
      erros.email = "E-mail é obrigatório.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      erros.email = "Endereço de e-mail inválido. Exemplo: exemplo@email.com";
    }

    if (!data.password) {
      erros.password = "Senha é obrigatória.";
    }

    if (!data.accept) {
      erros.accept = "Você precisa concordar com os termos e condições.";
    }

    if (
      data.password &&
      data.confirmationPassword &&
      data.password !== data.confirmationPassword
    ) {
      erros.confirmationPassword = "As senhas não coincidem.";
    }

    return erros;
  };

  const isFormFieldValid = (meta: any) => !!(meta.touched && meta.error);

  const getFormErrorMessage = (meta: any) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            flex: 60,
            height: "100vh",
            width: "100vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ImagemEsquerda}
            alt="Imagem esquerda"
            style={{ width: "60%" }}
          />
        </div>

        <div
          className="flex justify-content-center"
          style={{
            flex: 40,
            background: "#f2f2f2",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              width: "50%",
            }}
          >
            <img
              src={AcessiLogo}
              alt="Logo Acessi+"
              className="mx-auto d-block"
              style={{ width: "100%", height: "100", marginBottom: "70px" }}
            />
            <Form
              onSubmit={onSubmit}
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmationPassword: "",
                aceppt: false,
              }}
              validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-fluid">
                  <Field
                    name="name"
                    render={({ meta, input }) => (
                      <div className="field">
                        <span className="p-float-label">
                          <InputText
                            {...input}
                            id="name"
                            type="text"
                            size={30}
                            style={{ width: "100%" }}
                          />
                          <label
                            htmlFor="name"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Nome
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span
                          className="p-float-label p-input-icon-right"
                          style={{ marginTop: "20px" }}
                        >
                          <i className="pi pi-envelope" />
                          <InputText
                            id="email"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="email"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Email
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span
                          className="p-float-label"
                          style={{ marginTop: "20px" }}
                        >
                          <InputText
                            id="password"
                            {...input}
                            type="password"
                            size={30}
                            style={{ width: "100%" }}
                          />
                          <label
                            htmlFor="password"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Senha
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Field
                    name="confirmationPassword"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span
                          className="p-float-label"
                          style={{ marginTop: "20px" }}
                        >
                          <InputText
                            id="confirmationPassword"
                            {...input}
                            type="password"
                            size={30}
                            style={{ width: "100%" }}
                          />
                          <label
                            htmlFor="confirmationPassword"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Confirme a senha
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Button type="submit" label="Cadastrar" className="mt-2" />
                </form>
              )}
            ></Form>
          </div>
        </div>
      </div>
    </>
  );
};

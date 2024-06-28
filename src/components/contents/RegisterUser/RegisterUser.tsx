import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { UserService } from "services/User/UserService";
import { UserModel } from "interfaces/User/UserInterface";
import { useRouter } from "next/router";
import { message } from "antd";

export const RegisterUserComponent = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const serviceUser = new UserService();
  const Router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = (data: any, form: any) => {
    setFormData(data);
    setShowMessage(true);

    const user: UserModel = {
      nameUser: data.name,
      emailUser: data.email,
      passwordUser: data.password,
    };

    serviceUser.CreateUser(user).then((res) => {
      if (res.status == 200) {
        messageApi.open({
          type: "success",
          content: "Cadastro concluído com sucesso",
        });
        setTimeout(() => {
          Router.push("/");
        }, 1500);
      }
    });

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

    if (
      data.password &&
      data.confirmationPassword &&
      data.password !== data.confirmationPassword
    ) {
      erros.confirmationPassword = "As senhas não coincidem.";
    }

    if (!data.confirmationPassword) {
      erros.confirmationPassword = "Confirmação de senha é obrigatória.";
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
        {contextHolder}
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

          <div style={{ height: '100%' }}>
            <div>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <i className="pi pi-arrow-circle-left" style={{ fontSize: '1.5rem', marginLeft: "20px" }}></i>
                <h4 style={{ marginLeft: "5px" }}>
                  Voltar
                </h4>
              </a>
            </div>
          </div>

          <img
            src={"/assets/images/CadastroUsuario.PNG"}
            alt="Imagem esquerda"
            style={{ width: "90%" }}
          />
        </div>

        <div
          className="flex justify-content-center"
          style={{
            flex: 40,
            background: "#f1f1f1",
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
              src={"/assets/images/acessi+LogoName.svg"}
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
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
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
                          <Password
                            id="password"
                            feedback={false}
                            toggleMask
                            {...input}
                            type="password"
                            size={30}
                            style={{ width: "100%" }}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
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
                          <Password
                            id="confirmationPassword"
                            {...input}
                            toggleMask
                            type="password"
                            size={30}
                            style={{ width: "100%" }}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
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

                  <div className="flex flex-wrap justify-content-end mt-2">
                    <div className="flex align-items-center">
                      <a
                        href="/register-company"
                        style={{ textDecoration: "none" }}
                      >
                        É uma empresa?
                      </a>
                    </div>
                  </div>
                </form>
              )}
            ></Form>
          </div>
        </div>
      </div>
    </>
  );
};

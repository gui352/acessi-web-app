import { useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import "primeicons/primeicons.css";
import { UserModel } from "interfaces/User/UserInterface";
import { UserService } from "services/User/UserService";
import { useRouter } from "next/router";
import { Card, FloatButton } from "antd";
import useSpeechToText from "components/Accessibility/useSpeechToText";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";

export const LoginComponent = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const serviceUser = new UserService();
  const Router = useRouter();
  const [emailInput, setEmailInput] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);

  const { isListening, transcript, startListening, stopListening } = useSpeechToText({ continuous: true })

  const startStopListening = () => {
    isListening ? stopListening() : startListening()
  }

  const validate = (data: any) => {
    let erros: any = {};

    if (!emailInput) {
      erros.email = "Email é obrigatório.";
    }

    if (!passwordInput) {
      erros.password = "Senha é obrigatória.";
    }

    return erros;
  };

  const onSubmit = (data: any, form: any) => {
    setFormData(data);
    setShowMessage(true);

    const user: UserModel = {
      emailUser: emailInput,
      passwordUser: passwordInput,
    };

    serviceUser.LoginUser(user).then((res) => {
      if (res.status == 200) {
        Router.push("/home");
      }
    });

    form.restart();
  };

  const isFormFieldValid = (meta: any) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta: any) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  return (
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
          src={"/assets/images/ImageAccessibility.svg"}
          alt="Imagem esquerda"
          style={{ width: "60%" }}
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
              email: "",
              password: "",
            }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
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
                          value={isListening && emailFocus ? emailInput + (transcript.length ? (emailInput.length ? ' ' : '') + transcript : '') : emailInput}
                          onChange={(e) => {
                            setEmailInput(e.target.value);
                          }}
                          onFocus={() => {
                            setEmailFocus(true);
                          }}
                          onBlur={() => {
                            setEmailFocus(false);
                            setEmailInput(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : ''));
                          }}
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
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                          feedback={false}
                          toggleMask
                          {...input}
                          type="password"
                          size={30}
                          style={{ width: "100%" }}
                          value={isListening && passwordFocus ? passwordInput + (transcript.length ? (passwordInput.length ? ' ' : '') + transcript : '') : passwordInput}
                          onChange={(e) => {
                            setPasswordInput(e.target.value);
                          }}
                          onFocus={() => {
                            setPasswordFocus(true);
                          }}
                          onBlur={() => {
                            setPasswordFocus(false);
                            setPasswordInput(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : ''));
                          }}
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

                <Button type="submit" label="Entrar" className="mt-2" />

                <div className="flex flex-wrap justify-content-between gap-3 mt-2">
                  <div className="flex align-items-center">
                    <a
                      href="/forgot-password"
                      style={{ textDecoration: "none" }}
                    >
                      Esqueceu senha?
                    </a>
                  </div>
                  <div className="flex align-items-center">
                    <a href="/register-user" style={{ textDecoration: "none" }}>
                      Cadastre-se
                    </a>
                  </div>
                </div>
              </form>
            )}
          ></Form>
          {/* <Button
            label="Para empresas"
            className="mt-2"
            style={{ width: "100%" }}
            severity="secondary"
            onClick={() => Router.push("/register-company")}
          /> */}
        </div>
      </div>

      <FloatButton
        shape="circle"
        type="primary"
        style={{ insetInlineEnd: 94, position: "fixed", bottom: "38vh", right: "0.5vw" }}
        icon={isListening ? <AudioMutedOutlined /> : <AudioOutlined />}
        onClick={() => { startStopListening() }}
      />
    </div>
  );
};

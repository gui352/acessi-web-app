import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export const ForgotPasswordComponent = () => {
  const header = (
    <img
      src={"/assets/images/acessi+LogoName.svg"}
      alt="Logo Acessi+"
      className="mx-auto d-block"
      style={{
        width: "50%",
        height: "100",
        margin: "auto",
        display: "block",
        marginTop: "20px",
      }}
    />
  );
  const footer = (
    <>
      <div
        className="flex align-items-center"
        style={{ alignContent: "center" }}
      >
        <a href="/nao-feito" style={{ textDecoration: "none" }}>
          Esqueceu o e-mail ?
        </a>

        <Button
          label="Próxima"
          style={{ display: "block", marginLeft: "auto" }}
        />
      </div>
    </>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div className="card flex justify-content-center">
          <Card
            title="Recuperação de Conta"
            footer={footer}
            header={header}
            className="md:w-25rem"
          >
            <div className="flex flex-column gap-2">
              <label htmlFor="username">E-mail</label>
              <InputText id="username" aria-describedby="username-help" />
              <small id="username-help">
                Entre com seu e-mail para recuperar sua conta.
              </small>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

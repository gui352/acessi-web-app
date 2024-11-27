import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { UserService } from "services/User/UserService";
import { message } from "antd";
import { useRouter } from "next/router";

export const ForgotPasswordComponent = () => {
  const userService = new UserService();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  // Enviar token para o e-mail
  const handleSendEmail = async () => {
    if (email) {
      const isEmailSend = await userService.SendEmailValidationToken(email);
      if (isEmailSend) {
        setIsEmailSent(true);
        messageApi.open({
          type: "success",
          content:
            "Token enviado para o seu e-mail. Ele irá expirar em 5 minutos.",
        });
      } else {
        messageApi.open({
          type: "error",
          content:
            "Problema no envio de e-mail, entre em contato com o suporte.",
        });
      }
    }
  };

  // Validar token
  const handleValidateToken = async () => {
    const isValid = await userService.ValidateToken(token, email);
    if (isValid) {
      setIsTokenValid(true);
      messageApi.open({
        type: "success",
        content: "Token validado com sucesso. Crie uma nova senha.",
      });
    } else {
      messageApi.open({
        type: "error",
        content:
          "Token inválido ou expirado. Por favor, solicite um novo token.",
      });
    }
  };

  // Salvar nova senha
  const handleSaveNewPassword = async () => {
    if (newPassword !== confirmPassword) {
      messageApi.open({
        type: "error",
        content: "As senhas não coincidem. Por favor, tente novamente.",
      });
      return;
    }

    const isPasswordChanged = await userService.ChangePassword(
      newPassword,
      email
    );
    if (isPasswordChanged) {
      messageApi.open({
        type: "success",
        content: "Senha alterada com sucesso!",
      });
      setIsPasswordChanged(true);
    } else {
      messageApi.open({
        type: "error",
        content: "Erro ao alterar a senha. Tente novamente.",
      });
    }
  };

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

  const handleGoToLogin = () => {
    router.push("/");
  };

  return (
    <>
      {contextHolder}
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
            header={header}
            className="md:w-25rem"
          >
            {!isPasswordChanged && (
              <>
                {!isEmailSent && (
                  <div className="flex flex-column gap-2">
                    <label htmlFor="email">E-mail</label>
                    <InputText
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Digite seu e-mail"
                    />
                    <Button label="Enviar Token" onClick={handleSendEmail} />
                  </div>
                )}

                {isEmailSent && !isTokenValid && (
                  <div className="flex flex-column gap-2">
                    <label htmlFor="token">Token</label>
                    <InputText
                      id="token"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      placeholder="Digite o token recebido"
                    />
                    <Button
                      label="Validar Token"
                      onClick={handleValidateToken}
                    />
                  </div>
                )}

                {isTokenValid && (
                  <div className="flex flex-column gap-2">
                    <label htmlFor="newPassword">Nova Senha</label>
                    <InputText
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Digite a nova senha"
                    />
                    <label htmlFor="confirmPassword">
                      Confirmar Nova Senha
                    </label>
                    <InputText
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirme a nova senha"
                    />
                    <Button label="Salvar" onClick={handleSaveNewPassword} />
                  </div>
                )}
              </>
            )}

            {isPasswordChanged && (
              <div className="flex flex-column align-items-center">
                <p>Sua senha foi alterada com sucesso!</p>
                <Button label="Voltar ao Login" onClick={handleGoToLogin} />
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

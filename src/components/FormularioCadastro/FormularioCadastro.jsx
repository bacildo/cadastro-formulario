import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosLoginUsuario from "./DadosLoginUsuario";
import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ onSubmitForm }) {
  const [momentoAtual, setMomentoAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(() => {
    if (momentoAtual === chamadaFormulario.length - 1) {
      //qdo enviar a informação de conclusão, ele n adiciona uma etapa
      onSubmitForm(dadosColetados);
    }
  });

  const chamadaFormulario = [
    <DadosLoginUsuario onSubmitForm={coletarDadosFormulario} />,
    <DadosPessoais onSubmitForm={coletarDadosFormulario} />,
    <DadosDeEntrega onSubmitForm={coletarDadosFormulario} />,
    <Typography variant="h5">Cadastro Realizado com Sucesso!</Typography>,
  ];

  function coletarDadosFormulario(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximaEtapa();
  }
  function proximaEtapa() {
    setMomentoAtual(momentoAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={momentoAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados de Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {chamadaFormulario[momentoAtual]}
    </>
  );
}

export default FormularioCadastro;

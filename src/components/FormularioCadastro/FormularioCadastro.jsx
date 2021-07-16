import React from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosLoginUsuario from "./DadosLoginUsuario";

import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ onSubmitForm, validarCPF }) {
  return (
    <>
      <DadosPessoais onSubmitForm={onSubmitForm} validarCPF={validarCPF} />
      <DadosLoginUsuario />
      <DadosDeEntrega />
    </>
  );
}

export default FormularioCadastro;

import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosLoginUsuario from "./DadosLoginUsuario";
import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ onSubmitForm, validarCPF }) {
  const [momentoAtual, setMomentoAtual] = useState(1);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosLoginUsuario />;
      case 1:
        return (
          <DadosPessoais onSubmitForm={onSubmitForm} validarCPF={validarCPF} />
        );
      case 2:
        return <DadosDeEntrega />;
      default:
        return <Typography>Erro</Typography>;
    }
  }
  return <>{formularioAtual(momentoAtual)}</>;
}

// <DadosDeEntrega />
//<DadosPessoais onSubmitForm={onSubmitForm} validarCPF={validarCPF} />

//

export default FormularioCadastro;

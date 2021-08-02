import React, { useContext, useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import validacoesDeCadastros from "../../contexts/validacoesDeCadastros";
import useErros from "../../hooks/useErros";

function DadosPessoais({ onSubmitForm }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(validacoesDeCadastros);
  const [erros, validacaoDeCampos, validarEnvio] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (validarEnvio()) {
          onSubmitForm({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validacaoDeCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validacaoDeCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;

// import React, { useState, useContext } from "react";
// import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
// import validacoesDeCadastros from "../../contexts/validacoesDeCadastros";

// function DadosPessoais({ onSubmitForm }) {
//   const [nome, setNome] = useState("");
//   const [sobrenome, setSobrenome] = useState("");
//   const [cpf, setCPF] = useState("");
//   const [promocoes, setPromocoes] = useState(true);
//   const [novidades, setNovidades] = useState(true);
//   const [erros, setErros] = useState({
//     cpf: { valido: true, texto: "" },
//     nome: { valido: true, texto: "" },
//   });

//   const validacoes = useContext(validacoesDeCadastros);
//   function validacaoDeCampos(event) {
//     const { name, value } = event.target;
//     const novoEstado = { ...erros };
//     novoEstado[name] = validacoes[name](value);
//     setErros(novoEstado);
//   }
//   function validarEnvio() {
//     for (let campos in erros) {
//       if (!erros[campos].valido) {
//         return false;
//       }
//     }
//     return true;
//   }

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         if (validarEnvio()) {
//           onSubmitForm({ nome, sobrenome, cpf, novidades, promocoes });
//         }
//       }}
//     >
//       <TextField
//         value={nome}
//         onChange={(event) => {
//           setNome(event.target.value);
//         }}
//         onBlur={validacaoDeCampos}
//         error={!erros.nome.valido}
//         helperText={erros.nome.texto}
//         id="nome"
//         label="Nome"
//         variant="outlined"
//         margin="normal"
//         fullWidth
//       />
//       <TextField
//         value={sobrenome}
//         onChange={(event) => {
//           setSobrenome(event.target.value);
//         }}
//         id="sobrenome"
//         label="Sobrenome"
//         variant="outlined"
//         margin="normal"
//         fullWidth
//       />
//       <TextField
//         value={cpf}
//         onChange={(event) => {
//           setCPF(event.target.value);
//         }}
//         onBlur={validacaoDeCampos}
//         error={!erros.cpf.valido}
//         helperText={erros.cpf.texto}
//         id="CPF"
//         name="cpf"
//         label="CPF"
//         variant="outlined"
//         margin="normal"
//         fullWidth
//       />

//       <FormControlLabel
//         label="Promoções"
//         control={
//           <Switch
//             checked={promocoes}
//             onChange={(event) => {
//               setPromocoes(event.target.checked);
//             }}
//             name="promocoes"
//             color="primary"
//           />
//         }
//       />

//       <FormControlLabel
//         label="Novidades"
//         control={
//           <Switch
//             checked={novidades}
//             onChange={(event) => {
//               setNovidades(event.target.checked);
//             }}
//             name="promocoes"
//             color="primary"
//           />
//         }
//       />

//       <Button type="submit" variant="contained" color="primary">
//         Próximo
//       </Button>
//     </form>
//   );
// }

// export default DadosPessoais;

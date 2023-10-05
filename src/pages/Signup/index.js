import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
//import useAuth from "../../hooks/useAuth";
import axios from 'axios';
const validator = require('validator');

function isEmailValid(email) {
  return validator.isEmail(email);
}

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //const { signup } = useAuth();

  const handleSignup = async () => {
    if (!nome | !email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    } else if (!isEmailValid(email)) {
      setError("Apenas e-mails são permitidos, formato inválido");
      return;
    }

    //const res = signup(email, senha);

    //if (res) {
    //  setError(res);
    //  return;
    //}

    try {
      const apiUrlVerificacao = `http://localhost:3333/funcionarios/verificacao/${email}`;
      const responseVerificacao = await axios.get(apiUrlVerificacao);

      console.log('Resposta da API:', responseVerificacao.data);

      if (responseVerificacao.data.existe) {
        setError("Já existe uma conta com esse e-mail");

      } else {
        const apiUrl = 'http://localhost:3333/funcionarios';
        const response = await axios.post(apiUrl, {
          nome,
          email,
          emailConf,
          senha,
      });

        if (response.status === 201) {
          alert("Usuário cadastrado com sucesso!");
          navigate("/");
        } else {
          setError("Erro ao cadastrar usuário");
        }
      }
    } catch (error) {
      setError("Erro ao cadastrar usuário");
      console.error(error);
    }
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
      <Input
          type="nome"
          placeholder="Digite seu Nome Completo"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
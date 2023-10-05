import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const apiUrlVerificacao = `http://localhost:3333/funcionarios/verificacao/${email}`;
      const responseVerificacao = await axios.get(apiUrlVerificacao);
      
      if (responseVerificacao.data.existe) {
        const apiUrlLogin = 'http://localhost:3333/funcionarios/login';
        const response = await axios.post(apiUrlLogin, {
          email,
          senha,
        });

        if (response.status === 200) {
        
          signin(email, senha);
          navigate("/home");
        } else {
          setError("Erro ao fazer login");
        }
      } else {
          setError("Usuário não cadastrado");
      }

    
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError("E-mail ou senha incorretos");
        } else if (error.response && error.response.status === 404) {
          setError("Usuário não cadastrado");
        } else {
          setError("Erro ao fazer login");
        }
        console.error(error);
    };
  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
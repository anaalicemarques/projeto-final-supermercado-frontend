import React, { useState } from 'react';
import axios from 'axios';

function formatarDataParaEnvio(data) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, '0');
  const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function CadastroProduto() {
  const [produto, setProduto] = useState({
    nome: '',
    precoAtual: '',
    precoPromocao: '',
    tipo: '',
    descricao: '',
    dataValidade: '',
    quantidade: '',
    urlImagem: '',
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataFormatada = formatarDataParaEnvio(produto.dataValidade);
    produto.dataValidade = dataFormatada;

    try {
      const urlCadastrarProduto = 'http://localhost:3333/produtos';
      const responseCadastroProduto = await axios.post(urlCadastrarProduto, produto);

      if (responseCadastroProduto.status === 201) {
        alert('Produto cadastrado com sucesso:', responseCadastroProduto.data);
        
        setProduto({
          nome: '',
          precoAtual: '',
          precoPromocao: '',
          tipo: '',
          descricao: '',
          dataValidade: '',
          quantidade: '',
          urlImagem: '',
        });
      } else {
        setError('Erro ao cadastrar produto');
      }
    } catch (error) {
      setError('Erro ao cadastrar produto');
      console.error(error);
    }
  };

const containerStyle = {
  backgroundColor: '#267CA0',
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const labelStyle = {
  fontFamily: 'Roboto, sans-serif',
  color: '#fff',
  marginBottom: '5px',
};

const inputStyle = {
  fontFamily: 'Roboto, sans-serif',
  padding: '5px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
};

return (
  <div style={containerStyle}>
    <h2 style={{ color: 'white' }}>Cadastro de Produto</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome" style={labelStyle}>
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={produto.nome}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="precoAtual" style={labelStyle}>
          Preço Atual:
        </label>
        <input
          id="precoAtual"
          name="precoAtual"
          value={produto.precoAtual}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="precoPromocao" style={labelStyle}>
          Preço Promoção:
        </label>
        <input
          type="number"
          id="precoPromocao"
          name="precoPromocao"
          value={produto.precoPromocao}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="tipo" style={labelStyle}>
          Tipo:
        </label>
        <input
          type="text"
          id="tipo"
          name="tipo"
          value={produto.tipo}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="descricao" style={labelStyle}>
          Descrição:
        </label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          value={produto.descricao}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="dataValidade" style={labelStyle}>
          Data de Validade:
        </label>
        <input
          type="date"
          id="dataValidade"
          name="dataValidade"
          value={produto.dataValidade}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="quantidade" style={labelStyle}>
          Quantidade:
        </label>
        <input
          type="number"
          id="quantidade"
          name="quantidade"
          value={produto.quantidade}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <div>
        <label htmlFor="urlImagem" style={labelStyle}>
          Url da Imagem:
        </label>
        <input
          type="text"
          id="urlImagem"
          name="urlImagem"
          value={produto.urlImagem}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
      </div>
      <p className="labelError">{error}</p>
      <button
        type="submit"
        style={{
          backgroundColor: '#053C54',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '17px'
        }}
      >
        Cadastrar
      </button>
    </form>
  </div>
);
}

export default CadastroProduto;

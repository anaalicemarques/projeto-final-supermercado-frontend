import React, { useState } from 'react';
import axios from 'axios';

function RemoverProduto () {
  const [productId, setProductId] = useState('');
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const handleRemove = async (event) => {
    event.preventDefault();

    try {
      const urlExcluirProduto = `http://localhost:3333/produtos/${productId}`;
      const response = await axios.delete(urlExcluirProduto);

      if (response.status === 200) {
        alert("Produto removido com sucesso");
        setProductId('');
        setError('');

      } else if (response.status === 404) {
        setError("Produto não encontrado");
      } else {
        setError("Erro ao excluir produto");
      }
    } catch (error) {
      setError("Erro inseperado");
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
    color: 'white',
    marginBottom: '5px',
    fontSize: '16px',
  };

  const inputStyle = {
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#053C54',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: 'white' }}>Remover Produto</h2>
      <form onSubmit={handleRemove}>
        <div>
          <label htmlFor="productId" style={labelStyle}>
            ID do Produto a Remover:
          </label>
          <input
            type="text"
            id="productId"
            name="productId"
            value={productId}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        {error && <p style={{ color: 'rgba(235, 0, 0, 0.7)', fontWeight: 'bold' }}>{error}</p>}
        <button type="submit" style={buttonStyle}>
          Remover
        </button>
      </form>
    </div>
  );
}

export default RemoverProduto;

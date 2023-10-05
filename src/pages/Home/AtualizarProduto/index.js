import React, { useState } from 'react';

function AtualizarProduto() {
  
  const [produto, setProduto] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    discountedPrice: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Dados atualizados do produto:', produto);

  };

  return (
    <div>
      <h2>Atualização de Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={produto.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={produto.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">URL da Imagem:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={produto.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={produto.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="discountedPrice">Preço com Desconto:</label>
          <input
            type="text"
            id="discountedPrice"
            name="discountedPrice"
            value={produto.discountedPrice}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default AtualizarProduto;
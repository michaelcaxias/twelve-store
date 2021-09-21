import React, { Component } from 'react';

export default class Cart extends Component {
  getLocalStorage = () => JSON.parse(localStorage.getItem('CartItens'))

  render() {
    const itensLocalStorage = this.getLocalStorage();
    console.log(itensLocalStorage);

    const emptyCart = (
      <>
        <p data-testid="shopping-cart-product-quantity">0</p>
        <h1
          data-testid="shopping-cart-empty-message"
        >

          Seu carrinho está vazio Aloo
        </h1>
      </>
    );

    if (itensLocalStorage !== null) {
      return itensLocalStorage.map(
        ({ id, title }, index, array) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-quantity">{ array.length }</p>
            <p data-testid="shopping-cart-product-name">{ title }</p>
          </div>
        ),
      );
    }

    return (itensLocalStorage !== null) ? '' : emptyCart;
  }
}

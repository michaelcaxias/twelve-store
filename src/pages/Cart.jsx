import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonQuantity from '../components/ButtonQuantity';
import StepsCart from '../components/StepsCart';

export default class Cart extends Component {
  getLocalStorage = () => JSON.parse(localStorage.getItem('CartItens'))

  render() {
    const itensLocalStorage = this.getLocalStorage();

    const emptyCart = (
      <>
        <p data-testid="shopping-cart-product-quantity">0</p>
        <h1
          data-testid="shopping-cart-empty-message"
        >

          Seu carrinho está vazio
        </h1>
      </>
    );

    if (itensLocalStorage !== null) {
      return (
        <section>
          <StepsCart choose />
          { itensLocalStorage.map(
            ({ id, title }) => (
              <div key={ id }>
                <p data-testid="shopping-cart-product-name">{ title }</p>
                <ButtonQuantity />
              </div>
            ),
          ) }
          <Link to="/checkout">
            <button
              type="button"
              data-testid="checkout-products"
            >
              Finalizar compra
            </button>
          </Link>
        </section>
      );
    }

    return (itensLocalStorage !== null) ? '' : emptyCart;
  }
}

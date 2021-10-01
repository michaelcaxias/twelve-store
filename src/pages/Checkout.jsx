import React, { Component } from 'react';
import PaymentForm from '../components/PaymentForm';
import UserData from '../components/UserData';
import StepsCart from '../components/StepsCart';

export default class Checkout extends Component {
  getLocalStorage = () => JSON.parse(localStorage.getItem('CartItens'))

  render() {
    const itensLocalStorage = this.getLocalStorage();

    if (itensLocalStorage !== null) {
      return (
        <div>
          <StepsCart pay />
          <section>
            <h3>Carrinho:</h3>
            { itensLocalStorage.map(
              ({ id, title, price }) => (
                <div key={ id }>
                  <p>{ title }</p>
                  <p>{ price }</p>
                </div>
              ),
            ) }
          </section>
          <section>
            <h3>Preço total:</h3>
            { itensLocalStorage.reduce((acc, { price }) => (price + acc), 0) }
          </section>
          <UserData />
          <PaymentForm />
          <button type="button">Comprar</button>
        </div>
      );
    }
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import { Item } from 'semantic-ui-react';
import ProductCart from '../components/ProductCart/ProductCart';
import PaymentForm from '../components/PaymentForm';
import UserData from '../components/UserData';
import StepsCart from '../components/StepsCart/StepsCart';
import Header from '../components/Header/Header';

export default class Checkout extends Component {
  getLocalStorage = () => JSON.parse(localStorage.getItem('CartItens'))

  render() {
    const itensLocalStorage = this.getLocalStorage();

    if (itensLocalStorage !== null) {
      return (
        <div>
          <Header>
            <nav className="nav-header">
              <Link to="/cart">
                <BiArrowBack className="nav-icon" />
              </Link>
              <Link data-testid="shopping-cart-button" to="/cart">
                <FiShoppingCart className="nav-icon" />
              </Link>
            </nav>
          </Header>
          <StepsCart pay />
          <section>
            <h3>Carrinho:</h3>
            <Item.Group>
              { itensLocalStorage.map(
                ({ id, title, price, thumbnail }) => (
                  <ProductCart
                    key={ id }
                    price={ price }
                    title={ title }
                    thumbnail={ thumbnail }
                    disabled
                  />
                ),
              ) }
            </Item.Group>
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

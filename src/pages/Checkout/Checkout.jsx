import React, { Component } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import { Item } from 'semantic-ui-react';
import ProductCart from '../../components/ProductCart/ProductCart';
import PaymentForm from '../../components/PaymentForm';
import UserData from '../../components/UserData/UserData';
import StepsCart from '../../components/StepsCart/StepsCart';
import Header from '../../components/Header/Header';

export default class Checkout extends Component {
  getLocalStorage = () => JSON.parse(localStorage.getItem('CartItens'))

  render() {
    const itensLocalStorage = this.getLocalStorage();
    const totalPrice = itensLocalStorage.reduce((acc, { price }) => (price + acc), 0);

    if (itensLocalStorage !== null) {
      return (
        <section>
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
          <section className="checkout-section">
            <section className="products-checkout">
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
            <section className="total-price-section">
              <h4>{`Preço total: R$ ${String(totalPrice).replace('.', ',')}`}</h4>
            </section>
            <UserData />
            <PaymentForm />
          </section>
          <button type="button">Comprar</button>
        </section>
      );
    }
  }
}

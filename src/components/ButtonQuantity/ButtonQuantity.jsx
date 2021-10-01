import './ButtonQuantity.css';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class ButtonQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  increaseOrDecrease = ({ target: { name } }) => {
    if (name === 'increase') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
    }
    if (name === 'decrease') {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  }

  render() {
    const { quantity } = this.state;
    const { increaseOrDecrease } = this;
    return (
      <section className="buttons-quantity-container">
        <Button
          icon="plus"
          name="increase"
          color="pink"
          onClick={ increaseOrDecrease }
        />
        <span
          data-testid="shopping-cart-product-quantity"
          className="product-quantity"
        >
          {quantity}
        </span>
        <Button
          icon="minus"
          name="decrease"
          color="instagram"
          onClick={ increaseOrDecrease }
        />
      </section>
    );
  }
}

import React, { Component } from 'react';

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
      <section>
        <button
          type="button"
          name="decrease"
          data-testid="product-decrease-quantity"
          onClick={ increaseOrDecrease }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <button
          type="button"
          name="increase"
          data-testid="product-increase-quantity"
          onClick={ increaseOrDecrease }
        >
          +
        </button>
      </section>
    );
  }
}

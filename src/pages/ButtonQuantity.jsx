import React, { Component } from 'react';

export default class ButtonQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  saveQuantity = () => {
    const { quantity } = this.state;
    const itensLocalStorage = JSON.parse(localStorage.getItem('CartQuantity'));
    localStorage.setItem(
      'CartQuantity',
      JSON.stringify(itensLocalStorage + quantity),
    );
  }

  increaseOrDecrease = ({ target: { name } }) => {
    if (name === 'increase') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
      this.saveQuantity();
    }
    if (name === 'decrease') {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
      this.saveQuantity();
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
        <input type="text" disabled value={ quantity } />
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

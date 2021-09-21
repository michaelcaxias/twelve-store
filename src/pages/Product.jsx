import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product" className="product">
        <h3 className="product-title">{title}</h3>
        <img className="product-image" src={ thumbnail } alt={ title } />
        <h4 className="product-price">{`R$ ${price}` }</h4>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

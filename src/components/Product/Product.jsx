import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCart from '../AddCart';

export default class Product extends React.Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (

      <div data-testid="product" className="product">
        <div className="product-image-container">
          <Link
            to={ `/product/${id}/${encodeURIComponent(title)}` }
            data-testid="product-detail-link"
          >
            <img className="product-image" src={ thumbnail } alt={ title } size="small" />
          </Link>
        </div>
        <hr />
        <div>
          <h4 className="product-price">{`R$ ${price}` }</h4>
          <h3 className="product-title">{title}</h3>
        </div>
        <AddCart id={ id } title={ title } price={ price } testId="product-add-to-cart" />
      </div>

    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

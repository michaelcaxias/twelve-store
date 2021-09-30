import React from 'react';
import PropTypes from 'prop-types';
import { BiShoppingBag } from 'react-icons/bi';
import Product from '../Product/Product';
import './ProductList.css';

export default class ProductList extends React.Component {
  renderProducts = () => {
    const { productFound, productList } = this.props;
    const notFoundHeading = (
      <h1 className="no-products">
        Nenhum produto foi encontrado
        {' '}
        <BiShoppingBag />
      </h1>
    );
    const productMap = productList
      .map(({ id, title, thumbnail, price }) => (
        <Product
          key={ id }
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />
      ));
    return productFound
      ? productMap : notFoundHeading;
  }

  render() {
    return (
      <div className="products">
        { this.renderProducts() }
      </div>
    );
  }
}

ProductList.propTypes = {
  productFound: PropTypes.bool.isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { BiShoppingBag } from 'react-icons/bi';
import Product from '../Product/Product';
import './ProductList.css';

export default class ProductList extends React.Component {
  renderProducts = () => {
    const { productFound, productList } = this.props;
    const notFoundHeading = (
      <section className="no-products">
        <h1>
          Nenhum produto foi encontrado
          {' '}
          <BiShoppingBag />
        </h1>
      </section>
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
    const productsContainer = (
      <section className="products">
        { productMap }
      </section>
    );
    return productFound
      ? productsContainer : notFoundHeading;
  }

  render() {
    return this.renderProducts();
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

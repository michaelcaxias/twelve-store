import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './ProductList.css';

export default class ProductList extends React.Component {
  renderProducts = () => {
    const { productFound, productList } = this.props;
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
    return productFound ? productMap : <h1>Nenhum produto foi encontrado</h1>;
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

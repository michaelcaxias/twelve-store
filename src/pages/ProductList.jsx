import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

export default class ProductList extends React.Component {
  renderProducts = () => {
    const { productFound, productList } = this.props;
    const productMap = productList
      .map(({ id, title, thumbnail, price }) => (
        <Product
          key={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />
      ));
    return productFound ? productMap : <h1>Nenhum produto foi encontrado</h1>;
  }

  render() {
    const { inputSearch, handleChange, handleSubmit } = this.props;

    return (
      <div>
        <div>
          <input
            name="inputSearch"
            value={ inputSearch }
            onChange={ handleChange }
            type="text"
            data-testid="query-input"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ handleSubmit }
          >
            Buscar
          </button>
        </div>
        <div>
          { this.renderProducts() }
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  productFound: PropTypes.bool.isRequired,
  productList: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

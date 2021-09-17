import React from 'react';
import Loading from './Loading';
import Product from './Product';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productFound: false,
      inputSearch: '',
      productList: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      inputSearch: value,
    });
  }

  handleSubmit = () => {
    this.setState({ loading: true });
    const { inputSearch } = this.state;
    this.fetchProductList(1, inputSearch);
  }

  fetchProductList = async (categoryId, query) => {
    const recoverProductList = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      loading: false,
      productFound: recoverProductList.results.length > 0,
      productList: recoverProductList.results,
    });
  }

  renderProducts = () => {
    const { productFound, productList } = this.state;
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
    const { loading, inputSearch } = this.state;

    return (
      <div>
        <div>
          <input
            name="inputSearch"
            value={ inputSearch }
            onChange={ this.handleChange }
            type="text"
            data-testid="query-input"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleSubmit }
          >
            Buscar
          </button>
        </div>
        <div>
          { loading ? <Loading /> : this.renderProducts() }
        </div>
      </div>
    );
  }
}

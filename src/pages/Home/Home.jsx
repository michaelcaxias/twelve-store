import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import cartIcon from '../../images/cart-icon.png';
import Nav from '../../components/Nav/Nav';
import ProductList from '../../components/ProductList/ProductList';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Loading from '../../components/Loading/Loading';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: 0,
      productList: [],
      productFound: false,
      inputSearch: '',
      loading: false,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      inputSearch: value,
    });
  }

  handleSubmit = ({ key, type }) => {
    const { inputSearch, categoryId } = this.state;
    console.log(key);
    if (key === 'Enter') {
      this.fetchProductList(categoryId, inputSearch);
    }
    if (type === 'click') {
      this.fetchProductList(categoryId, inputSearch);
    }
  };

  fetchProductList = async (id, query = '') => {
    this.setState({ loading: true });
    const recoverProductList = await getProductsFromCategoryAndQuery(id, query);
    this.setState({
      categoryId: id,
      productFound: recoverProductList.results.length > 0,
      productList: recoverProductList.results,
      loading: false,
    });
    return true;
  }

  render() {
    const { categoryId, productList, productFound, inputSearch, loading } = this.state;
    const { handleChange, handleSubmit } = this;
    const mainContent = (
      <section className="main-content">
        <nav>
          <Nav onClick={ this.fetchProductList } />
        </nav>
        <section className="search-container">
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <section className="input-search-container">
            <section className="input-and-button">
              <input
                name="inputSearch"
                value={ inputSearch }
                onChange={ handleChange }
                className="input-search"
                type="text"
                data-testid="query-input"
                onKeyPress={ handleSubmit }
              />
              <button
                data-testid="query-button"
                type="button"
                className="input-button"
                onClick={ handleSubmit }
              >
                Buscar
              </button>
            </section>
            <Link data-testid="shopping-cart-button" to="/cart">
              <img src={ cartIcon } className="cart-icon" alt="cart" />
            </Link>
          </section>
          <ProductList
            inputSearch={ inputSearch }
            productList={ productList }
            categoryId={ categoryId }
            productFound={ productFound }
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
          />
        </section>
      </section>
    );
    return (
      (loading) ? <Loading /> : mainContent
    );
  }
}

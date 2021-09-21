import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import cartIcon from '../images/cart-icon.png';
import Nav from './Nav';
import ProductList from './ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: 0,
      productList: [],
      productFound: false,
      inputSearch: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      inputSearch: value,
    });
  }

  handleSubmit = () => {
    const { inputSearch, categoryId } = this.state;
    this.fetchProductList(categoryId, inputSearch);
  };

  fetchProductList = async (id, query) => {
    const recoverProductList = await getProductsFromCategoryAndQuery(id, query);
    this.setState({
      categoryId: id,
      productFound: recoverProductList.results.length > 0,
      productList: recoverProductList.results,
    });
  }

  render() {
    const { categoryId, productList, productFound, inputSearch } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
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
                onKeyUp={ handleSubmit }
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
  }
}

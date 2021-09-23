/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Icon, Image } from 'semantic-ui-react';
import Nav from '../../components/Nav/Nav';
import logo from '../../images/logo.png';
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
    const { productList, productFound, inputSearch, loading } = this.state;
    const { handleChange, handleSubmit } = this;
    const mainContent = (
      <main className="main-content">
        <nav />
        <header className="search-container">
          <h1
            data-testid="home-initial-message"
            className="search-title"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <section className="input-search-container">
            <Image src={ logo } size="small" />
            <section className="input-and-button">
              <input
                name="inputSearch"
                value={ inputSearch }
                onChange={ handleChange }
                className="input-search"
                type="text"
                data-testid="query-input"
                onKeyPress={ handleSubmit }
                placeHolder="Buscar produtos, marcas e muito mais..."
              />
              <button
                data-testid="query-button"
                type="button"
                className="input-button"
                onClick={ handleSubmit }
              >
                <Icon name="search" color="black" />
              </button>
            </section>
          </section>
          <nav className="nav-header">
            <Nav onClick={ this.fetchProductList } />
            <Link data-testid="shopping-cart-button" to="/cart">
              <Icon name="shopping cart" size="large" color="black" />
            </Link>
          </nav>
        </header>
        <ProductList
          productList={ productList }
          productFound={ productFound }
        />
      </main>
    );
    return (
      (loading) ? <Loading /> : mainContent
    );
  }
}

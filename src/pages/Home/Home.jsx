/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FiShoppingCart } from 'react-icons/fi';
import Categories from '../../components/Categories/Categories';
import ProductList from '../../components/ProductList/ProductList';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';

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

  clickOnLogo = () => {
    this.fetchProductList('', '');
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
    const { handleChange, handleSubmit, clickOnLogo } = this;
    const mainContent = (
      <main className="main-content">
        <Header
          inputSearch={ inputSearch }
          handleChange={ handleChange }
          handleSubmit={ handleSubmit }
          clickOnLogo={ clickOnLogo }
        >
          <nav className="nav-header">
            <nav className="nav-items">
              <Categories onClick={ this.fetchProductList } />
              <Link to="#contact" className="nav-item">Contato</Link>
            </nav>
            <Link data-testid="shopping-cart-button" to="/cart">
              <FiShoppingCart className="shopping-cart-button" />
            </Link>
          </nav>
        </Header>
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

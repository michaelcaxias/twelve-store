import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Image } from 'semantic-ui-react';
import logo from '../../images/logo.png';

export default class Header extends Component {
  render() {
    const {
      inputSearch,
      handleChange,
      handleSubmit,
      clickOnLogo,
      children,
    } = this.props;

    return (
      <header className="search-container">
        <h1
          data-testid="home-initial-message"
          className="search-title"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <section className="input-search-container">
          <Link to="/">
            <Image src={ logo } size="small" onClick={ clickOnLogo } />
          </Link>
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
        { children }
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  clickOnLogo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputSearch: PropTypes.func.isRequired,
};

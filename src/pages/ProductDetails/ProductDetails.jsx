import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import { FiShoppingCart } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import { getProductById } from '../../services/api';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import AddCart from '../../components/AddCart';
import FormAvaliation from '../../components/FormAvaliation/FormAvaliation';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      productDetails: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id, title } } } = this.props;
    this.getProductDetails(id, title);
  }

  getProductDetails = async (productId) => {
    const productDetails = await getProductById(productId);
    this.setState({
      loading: false,
      productDetails,
      picture: productDetails.pictures[0].url,
    });
    return true;
  }

  render() {
    const { productDetails:
      { id, title, price, permalink }, loading, picture } = this.state;
    const product = (
      <section>
        <Header>
          <nav className="nav-header">
            <Link to="/">
              <BiArrowBack className="nav-icon" />
            </Link>
            <Link data-testid="shopping-cart-button" to="/cart">
              <FiShoppingCart className="nav-icon" />
            </Link>
          </nav>
        </Header>
        <section className="product-details-container">
          <section className="product-details">
            <img src={ picture } alt={ title } className="product-details-image" />
            <h1>{`R$ ${price}`}</h1>
            <p data-testid="product-detail-name ">{ title }</p>
            <section className="product-details-buttons">
              <AddCart
                id={ id }
                title={ title }
                price={ price }
                thumbnail={ picture }
                testId="product-detail-add-to-cart"
              />
              <a
                target="_blank"
                className="buyNow"
                rel="noopener noreferrer"
                href={ permalink }
              >
                Ir ao site
              </a>
            </section>
          </section>
          <FormAvaliation id={ id } />
        </section>
      </section>
    );
    return (
      (loading) ? <Loading /> : product
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

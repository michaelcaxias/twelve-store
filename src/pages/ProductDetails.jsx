import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from '../components/Loading/Loading';
import AddCart from '../components/AddCart';
import cartIcon from '../images/cart-icon.png';
import FormAvaliation from '../components/FormAvaliation/FormAvaliation';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      productDetails: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id, title } } } = this.props;
    this.getProductDetails(id, title);
  }

  getProductDetails = async (productId, productQuery) => {
    const { results } = await getProductsFromCategoryAndQuery(productId, productQuery);
    const productDetails = results.find(({ id }) => id === productId);
    this.setState({
      loading: false,
      productDetails,
    });
    return true;
  }

  render() {
    const { productDetails: { id, title, thumbnail, price }, loading } = this.state;
    const product = (
      <section>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ cartIcon } className="cart-icon" alt="cart" />
        </Link>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
        <AddCart id={ id } title={ title } price={ price } testId="product-detail-add-to-cart" />
        <FormAvaliation id={ id } />
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

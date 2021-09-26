import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import { Card } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from '../components/Loading/Loading';
import AddCart from '../components/AddCart';
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
          <FiShoppingCart className="shopping-cart-button" />
        </Link>
        <section className="product-details-container">
          <Card style={ { width: '18rem' } }>
            <Card.Img variant="top" src={ thumbnail } />
            <Card.Body>
              <Card.Title>{`R$ ${price}`}</Card.Title>
              <Card.Text data-testid="product-detail-name">
                { title }
              </Card.Text>
            </Card.Body>
            <AddCart
              id={ id }
              title={ title }
              price={ price }
              testId="product-detail-add-to-cart"
            />
          </Card>
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

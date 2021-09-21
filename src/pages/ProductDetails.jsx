import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

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
    console.log(productDetails);
    return true;
  }

  render() {
    const { productDetails: { title, thumbnail, price }, loading } = this.state;
    const product = (
      <section>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
      </section>
    );
    return (
      (loading) ? <Loading /> : product
    );
  }
}

import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AddCart from '../AddCart';

export default class Product extends React.Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (

      <Card style={ { width: '18rem' } } data-testid="product" className="product">
        <Link
          to={ `/product/${id}/${encodeURIComponent(title)}` }
          data-testid="product-detail-link"
        >
          <Card.Img variant="top" src={ thumbnail } alt={ title } />
          <hr />
          <Card.Body>
            <Card.Title className="product-price">{`R$ ${price}`}</Card.Title>
            <Card.Text className="product-title">
              {title}
            </Card.Text>
          </Card.Body>
        </Link>
        <AddCart id={ id } title={ title } price={ price } testId="product-add-to-cart" />
      </Card>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

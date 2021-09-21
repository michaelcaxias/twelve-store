import PropTypes from 'prop-types';
import React from 'react';
import { getCategories } from '../services/api';

export default class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const recoverCategories = await getCategories();
    this.setState({
      categories: recoverCategories,
    });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    return (
      <ul>
        Categorias:
        { categories
          .map(({ id, name }) => (
            <button
              type="button"
              data-testid="category"
              key={ id }
              onClick={ () => onClick(id) }
            >
              { name }
            </button>
          )) }
      </ul>
    );
  }
}

Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
};

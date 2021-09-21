import PropTypes from 'prop-types';
import React from 'react';
import './Nav.css';
import { getCategories } from '../services/api';

class Nav extends React.Component {
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
      <ul className="category-list">
        <h1>Categorias:</h1>
        { categories
          .map(({ id, name }) => (
            <section key={ id } className="category-item">
              <label htmlFor={ id }>
                <input
                  type="radio"
                  name="category"
                  id={ id }
                  data-testid="category"
                  onClick={ () => onClick(id) }
                />
                { name }
              </label>
            </section>
          )) }
      </ul>
    );
  }
}

Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Nav;

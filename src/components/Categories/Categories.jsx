import PropTypes from 'prop-types';
import React from 'react';
import './Categories.css';
import { Icon } from 'semantic-ui-react';
import { getCategories } from '../../services/api';
import Loading from '../Loading/Loading';

export default class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
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
      loading: false,
    });
  }

  render() {
    const { categories, loading } = this.state;
    const { onClick } = this.props;
    const categoryList = (
      <section className="dropdown">
        <button type="button" className="dropdown-button nav-item">
          Categorias
          <Icon name="angle down" />
        </button>
        <section className="dropdown-content">
          { categories
            .map(({ id, name }) => (
              <button
                type="button"
                key={ id }
                name="category"
                id={ id }
                data-testid="category"
                onClick={ () => onClick(id) }
              >
                { name }
              </button>
            )) }
        </section>
      </section>
    );
    return (
      (loading) ? <Loading /> : categoryList
    );
  }
}

Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
};

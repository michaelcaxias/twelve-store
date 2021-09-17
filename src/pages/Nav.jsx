import React from 'react';
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
    return (
      <div>
        <ul>
          Categorias:
          { categories.map(({ id, name }) => <li data-testid="category" key={ id }>{ name }</li>) }
        </ul>
      </div>
    );
  }
}

export default Nav;

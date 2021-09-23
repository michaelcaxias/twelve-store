import React from 'react';
import PropTypes from 'prop-types';
import './FormAvaliation.css';
// Foi utilizado neste projeto o FrameWork Semantic UI
import { Rating } from 'semantic-ui-react';

export default class FormAvaliation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      email: '',
      description: '',
      ratingHistory: false,
      arrayAvaliation: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const { id } = this.props;
    const getItens = JSON.parse(localStorage.getItem('Avaliation'));
    if (getItens !== null) {
      const arrayAvaliation = getItens.filter((element) => (element.id === id));
      if (arrayAvaliation.length !== 0) {
        this.setState({
          ratingHistory: true,
          arrayAvaliation,
        });
      }
    }
  }

  handleRating = (event, { rating }) => {
    // Função de CallBack do React Semantic UI https://react.semantic-ui.com/modules/rating/#types-on-rate
    this.setState({ rating });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.addLocalStorage();
  } ;

  addLocalStorage = () => {
    const { id } = this.props;
    const { rating, email, description } = this.state;
    const objAvaliation = { id, rating, email, description };
    if (localStorage.getItem('Avaliation') === null) {
      localStorage.setItem('Avaliation', JSON.stringify([objAvaliation]));
    } else {
      const itensLocalStorage = JSON.parse(localStorage.getItem('Avaliation'));
      const arrayAvaliation = itensLocalStorage.filter((element) => (element.id === id));
      localStorage.setItem(
        'Avaliation',
        JSON.stringify([...arrayAvaliation, objAvaliation]),
      );
    }
  }

  render() {
    const { rating, email, description, ratingHistory, arrayAvaliation } = this.state;
    let renderAvaliations = '';
    if (arrayAvaliation.length !== null) {
      renderAvaliations = arrayAvaliation.map((element) => (
        <div key={ element.id } className="container-avaliation-feedback">
          <p>{ element.email }</p>
          <Rating icon="star" rating={ element.rating } maxRating={ 5 } />
          <p>{ element.description }</p>
        </div>
      ));
    }
    return (
      <section>
        <form>
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Digite seu email"
          />
          <Rating
            icon="star"
            name="rating"
            rating={ rating }
            onRate={ this.handleRating }
            defaultRating={ 3 }
            maxRating={ 5 }
          />
          <textarea
            data-testid="product-detail-evaluation"
            value={ description }
            onChange={ this.handleChange }
            name="description"
          />
          <button type="button" onClick={ this.handleSubmit }>Avaliar</button>
        </form>
        <section>
          { ratingHistory ? renderAvaliations : '' }
        </section>
      </section>
    );
  }
}

FormAvaliation.propTypes = {
  id: PropTypes.string.isRequired,
};

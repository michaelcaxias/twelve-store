import React from 'react';
import PropTypes from 'prop-types';
import './FormAvaliation.css';
// Foi utilizado neste projeto o FrameWork Semantic UI
import { Rating } from 'semantic-ui-react';
import { Form, Button } from 'react-bootstrap';
import perfilImage from '../../images/perfil-image.png';

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
        <div key={ element.id } className="avaliation-section feedback">
          <div>
            <img src={ perfilImage } alt="perfil" />
          </div>
          <div>
            <p>{ element.email }</p>
            <Rating icon="star" rating={ element.rating } maxRating={ 5 } />
            <p>{ element.description }</p>
          </div>
        </div>
      ));
    }
    return (
      <section className="form-avaliation-container">
        <section className="form-avaliation avaliation-section">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digite seu e-mail:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={ this.handleChange }
                value={ email }
                placeholder="nome@exemplo.com"
              />
            </Form.Group>
            <section>
              <p>Avaliação</p>
              <Rating
                icon="star"
                name="rating"
                rating={ rating }
                size="huge"
                onRate={ this.handleRating }
                defaultRating={ 3 }
                maxRating={ 5 }
              />
            </section>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Conte-nos mais detalhes:</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                data-testid="product-detail-evaluation"
                value={ description }
                onChange={ this.handleChange }
                rows={ 3 }
              />
            </Form.Group>
            <Button onClick={ this.handleSubmit }>Avaliar</Button>
          </Form>
        </section>
        <section>
          <p>Avaliações:</p>
          <section className="feedbacks-section">
            { ratingHistory ? renderAvaliations : '' }
          </section>
        </section>
      </section>
    );
  }
}

FormAvaliation.propTypes = {
  id: PropTypes.string.isRequired,
};

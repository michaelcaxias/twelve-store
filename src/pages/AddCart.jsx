import React from 'react';

export default class AddCart extends React.Component {
  constructor(props) {
    super(props)
  }

  addLocalStorage = (id, title) => {
    const products =  {id, title};    
    if(localStorage.getItem('CartItens') === null){
      localStorage.setItem('CartItens', JSON.stringify([products]))
    } else {
      const itensLocalStorage = JSON.parse(localStorage.getItem('CartItens'));
      localStorage.setItem(
          'CartItens', 
          JSON.stringify([...itensLocalStorage, products])
      );
    };
  }

  render() {
    const { id, title, testId } = this.props;
    return (
      <button type="button" data-testid={ testId } onClick={ () => this.addLocalStorage(id, title) }>Adicionar ao Carrinho</button>
    );
  }
}

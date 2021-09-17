import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <h1
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }
}

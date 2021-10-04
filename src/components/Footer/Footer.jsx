import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-about">
          <h2>Sobre</h2>
          <p>
            Este projeto foi desenvolvido em grupo utilizando React,
            <br />
            Metodologias ágeis, Semantic UI e Bootstrap.
          </p>
        </section>
        <section className="footer-devs">
          <h2>Desenvolvedores</h2>
        </section>
      </footer>
    );
  }
}

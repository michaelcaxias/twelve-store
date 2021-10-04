import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
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
          <section className="dev-info">
            <a
              href="https://www.linkedin.com/in/michaelcaxias/"
              rel="noreferrer"
              target="_blank"
            >
              <p>Michael Caxias</p>
              <Button circular color="linkedin" icon="linkedin" size="tiny" />
            </a>
          </section>
          <section className="dev-info">
            <a
              href="https://www.linkedin.com/in/lucas-accurcio/"
              rel="noreferrer"
              target="_blank"
            >
              <p>Lucas Accurcio</p>
              <Button circular color="linkedin" icon="linkedin" size="tiny" />
            </a>
          </section>
          <section className="dev-info">
            <a
              href="https://www.linkedin.com/in/michaelcaxias/"
              rel="noreferrer"
              target="_blank"
            >
              <p>Cássio Mascarenhas</p>
              <Button circular color="linkedin" icon="linkedin" size="tiny" />
            </a>
          </section>
          <section className="dev-info">
            <a
              href="https://www.linkedin.com/in/anastacio-neto/"
              rel="noreferrer"
              target="_blank"
            >
              <p>Anastácio Neto</p>
              <Button circular color="linkedin" icon="linkedin" size="tiny" />
            </a>
          </section>
          <section className="dev-info">
            <a
              href="https://www.linkedin.com/in/julio-cesar-fallace-filho-144a94b3/"
              rel="noreferrer"
              target="_blank"
            >
              <p>Julio Fallace Filho</p>
              <Button circular color="linkedin" icon="linkedin" size="tiny" />
            </a>
          </section>
        </section>
      </footer>
    );
  }
}

import React, { Component } from 'react';
import './Loading.css';

export default class Loading extends Component {
  render() {
    return (
      <section className="loading-container">
        <div className="loading" />
      </section>
    );
  }
}

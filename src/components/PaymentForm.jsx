import React, { Component } from 'react';
import './PaymentForm.css';
import { Form, Radio } from 'semantic-ui-react';

export default class PaymentForm extends Component {
  render() {
    return (
      <section className="payment-method">
        <Form.Group>
          <Form.Field
            control={ Radio }
            name="payment-method"
            label="Boleto"
          />
          <Form.Field
            control={ Radio }
            name="payment-method"
            label="Pix"
          />
          <Form.Field
            control={ Radio }
            name="payment-method"
            label="Cartão"
          />
        </Form.Group>
      </section>
    );
  }
}

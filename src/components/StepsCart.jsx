import React, { Component } from 'react';
import { Icon, Step } from 'semantic-ui-react';

export default class StepsCart extends Component {
  choosingOrder = () => {
    const { pay, confirm } = this.props;
    if (pay || confirm) {
      return (
        <Step completed>
          <Icon name="truck" />
          <Step.Content>
            <Step.Title>Escolhendo</Step.Title>
            <Step.Description>Edite e confirme seu pedido</Step.Description>
          </Step.Content>
        </Step>
      );
    }
    return (
      <Step active>
        <Icon name="truck" />
        <Step.Content>
          <Step.Title>Escolhendo</Step.Title>
          <Step.Description>Edite e confirme seu pedido</Step.Description>
        </Step.Content>
      </Step>
    );
  }

  payment = () => {
    const { choose, confirm } = this.props;
    if (confirm) {
      return (
        <Step completed>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Pagamento</Step.Title>
            <Step.Description>Digite suas informações de pagamento</Step.Description>
          </Step.Content>
        </Step>
      );
    }
    if (choose) {
      return (
        <Step>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Pagamento</Step.Title>
            <Step.Description>Digite suas informações de pagamento</Step.Description>
          </Step.Content>
        </Step>
      );
    }
    return (
      <Step active>
        <Icon name="payment" />
        <Step.Content>
          <Step.Title>Pagamento</Step.Title>
          <Step.Description>Digite suas informações de pagamento</Step.Description>
        </Step.Content>
      </Step>
    );
  }

  confirmOrder = () => {
    const { choose, pay, confirm, finished } = this.props;
    if (confirm) {
      return (
        <Step>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirmando Pedido</Step.Title>
          </Step.Content>
        </Step>
      );
    }
    if (choose || pay) {
      return (
        <Step>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirmando Pedido</Step.Title>
          </Step.Content>
        </Step>
      );
    }
    if (finished) {
      return (
        <Step>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirmando Pedido</Step.Title>
          </Step.Content>
        </Step>
      );
    }
  }

  render() {
    return (
      <Step.Group>
        { this.choosingOrder() }
        { this.payment() }
        { this.confirmOrder() }
      </Step.Group>
    );
  }
}

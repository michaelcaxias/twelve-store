import './StepsCart.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const STEP_DESCRIPTION = 'Digite suas informações de pagamento';
    if (confirm) {
      return (
        <Step completed>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Pagamento</Step.Title>
            <Step.Description>{STEP_DESCRIPTION}</Step.Description>
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
            <Step.Description>{STEP_DESCRIPTION}</Step.Description>
          </Step.Content>
        </Step>
      );
    }
    return (
      <Step active>
        <Icon name="payment" />
        <Step.Content>
          <Step.Title>Pagamento</Step.Title>
          <Step.Description>{STEP_DESCRIPTION}</Step.Description>
        </Step.Content>
      </Step>
    );
  }

  confirmOrder = () => {
    const { choose, pay, confirm, finished } = this.props;
    const CONFIRM_ORDER = 'Confirmando Pedido';
    if (confirm) {
      return (
        <Step>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>{CONFIRM_ORDER}</Step.Title>
          </Step.Content>
        </Step>
      );
    }
    if (choose || pay) {
      return (
        <Step>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>{CONFIRM_ORDER}</Step.Title>
          </Step.Content>
        </Step>
      );
    }
    if (finished) {
      return (
        <Step>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>{CONFIRM_ORDER}</Step.Title>
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

StepsCart.propTypes = {
  choose: PropTypes.bool.isRequired,
  confirm: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,
  pay: PropTypes.bool.isRequired,
};

import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'semantic-ui-react';

const genderOptions = [
  { key: 'm', text: 'Homem', value: 'male' },
  { key: 'f', text: 'Mulher', value: 'female' },
  { key: 'o', text: 'Outro', value: 'other' },
];

const countryOptions = [
  { key: 'br', value: 'br', flag: 'br', text: 'Brasil' },
  { key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal' },
];

const stateOptions = [
  { value: 'AC', text: 'Acre' },
  { value: 'AL', text: 'Alagoas' },
  { value: 'AP', text: 'Amapá' },
  { value: 'AM', text: 'Amazonas' },
  { value: 'BA', text: 'Bahia' },
  { value: 'CE', text: 'Ceará' },
  { value: 'DF', text: 'Distrito Federal' },
  { value: 'ES', text: 'Espírito Santo' },
  { value: 'GO', text: 'Goías' },
  { value: 'MA', text: 'Maranhão' },
  { value: 'MT', text: 'Mato Grosso' },
  { value: 'MS', text: 'Mato Grosso do Sul' },
  { value: 'MG', text: 'Minas Gerais' },
  { value: 'PA', text: 'Pará' },
  { value: 'PB', text: 'Paraíba' },
  { value: 'PR', text: 'Paraná' },
  { value: 'PE', text: 'Pernambuco' },
  { value: 'PI', text: 'Piauí' },
  { value: 'RJ', text: 'Rio de Janeiro' },
  { value: 'RN', text: 'Rio Grande do Norte' },
  { value: 'RS', text: 'Rio Grande do Sul' },
  { value: 'RO', text: 'Rondônia' },
  { value: 'RR', text: 'Roraíma' },
  { value: 'SC', text: 'Santa Catarina' },
  { value: 'SP', text: 'São Paulo' },
  { value: 'SE', text: 'Sergipe' },
  { value: 'TO', text: 'Tocantins' },
];

export default class UserData extends Component {
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            data-testid="checkout-fullname"
            id="form-input-control-first-name"
            control={ Input }
            text="Nome"
            placeholder="Nome"
          />
          <Form.Field
            data-testid="checkout-email"
            id="form-input-control-email"
            control={ Input }
            text="E-mail"
            placeholder="exemplo@email.com"
          />
          <Form.Field
            control={ Select }
            options={ genderOptions }
            text={ { children: 'Gender', htmlFor: 'form-select-control-gender' } }
            placeholder="Gênero"
            search
            searchInput={ { id: 'form-select-control-gender' } }
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            data-testid="checkout-phone"
            id="form-input-control-phone"
            control={ Input }
            text="Telefone"
            placeholder="(00) 00000-0000"
          />
          <Form.Field
            data-testid="checkout-cpf"
            id="form-input-control-cpf"
            control={ Input }
            text="CPF"
            placeholder="000.000.000-00"
          />
          <Form.Field
            data-testid="checkout-address"
            id="form-input-control-address"
            control={ Input }
            text="Morada"
            placeholder="Morada"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={ Select }
            options={ countryOptions }
            text={ { children: 'País', htmlFor: 'form-select-control-country' } }
            placeholder="País"
            search
            searchInput={ { id: 'form-select-control-country' } }
          />
          <Form.Field
            control={ Select }
            options={ stateOptions }
            text={ { children: 'Estado', htmlFor: 'form-select-control-state' } }
            placeholder="Estado"
            search
            searchInput={ { id: 'form-select-control-state' } }
          />
          <Form.Field
            data-testid="checkout-cep"
            id="form-input-control-cep"
            control={ Input }
            text="CEP"
            placeholder="CEP"
          />
        </Form.Group>
        <Form.Field
          id="form-button-control-public"
          control={ Button }
          content="Confirmar"
          text="Confirm"
        />
      </Form>
    );
  }
}

import React, { useState } from 'react';
import { Container, Form, Fields, TransactionTypeContainer } from './style';

import Header from '../../components/Header';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';

const Register = () => {
  const [transactionTypeButton, setTransactionTypeButton] = useState('');

  const handlePressTypeButton = (type: 'up' | 'down') => {
    setTransactionTypeButton(type);
  };

  return (
    <Container>
      <Header title={'Cadastro'} />

      <Form>
        <Fields>
          <Input placeholder="Name" />
          <Input placeholder="Price" />

          <TransactionTypeContainer>
            <TransactionTypeButton
              onPress={() => handlePressTypeButton('up')}
              title="Income"
              type="up"
              isActive={transactionTypeButton === 'up' && true}
            />
            <TransactionTypeButton
              onPress={() => handlePressTypeButton('down')}
              title="Outcome"
              type="down"
              isActive={transactionTypeButton === 'down' && true}
            />
          </TransactionTypeContainer>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;

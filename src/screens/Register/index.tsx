import React from 'react';
import { Container, Header, Title, Form, Fields } from './style';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';

const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Criar conta</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Name" />
          <Input placeholder="Price" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;

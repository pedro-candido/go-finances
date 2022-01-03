import React from 'react';
import { Container, Header, Title, Form } from './style';

import Input from '../../components/Form/Input';

const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Criar conta</Title>
      </Header>

      <Form>
        <Input placeholder="Name" />
        <Input placeholder="Price" />
      </Form>
    </Container>
  );
};

export default Register;

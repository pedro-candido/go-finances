import React, { useState } from 'react';
import { Container, Form, Fields, TransactionTypeContainer } from './style';
import { Modal } from 'react-native';

import Header from '../../components/Header';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import CategorySelect from '../CategorySelect';

const Register = () => {
  const [transactionTypeButton, setTransactionTypeButton] = useState('');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  const handlePressTypeButton = (type: 'up' | 'down') => {
    setTransactionTypeButton(type);
  };

  return (
    <Container>
      <Header title={'Resumo por categoria'} />

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

          <CategorySelectButton category={category.name} onPress={() => handleShowModal()} />

          <Modal visible={isModalVisible}>
            <CategorySelect
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseModal}
            />
          </Modal>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;

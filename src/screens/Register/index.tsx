import React, { useState } from 'react';
import { Container, Form, Fields, TransactionTypeContainer } from './style';
import { Modal } from 'react-native';

import Header from '../../components/Header';

import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import CategorySelect from '../CategorySelect';
import InputForm from '../../components/Form/InputForm';
import { useForm } from 'react-hook-form';
import { categories } from '../../utils/categories';

interface FormProps {
  amount: string;
  name: string;
}

const Register = () => {
  const [transactionTypeButton, setTransactionTypeButton] = useState('');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleShowModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  const handlePressTypeButton = (type: 'up' | 'down') => {
    setTransactionTypeButton(type);
  };

  const handleRegister = (form: FormProps) => {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType: transactionTypeButton,
      category: category.key,
    };

    console.log(data);
  };

  return (
    <Container>
      <Header title={'Resumo por categoria'} />

      <Form>
        <Fields>
          <InputForm control={control} name="name" placeholder="Nome" />
          <InputForm control={control} name="amount" placeholder="Preço" />

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

        <Button onPress={handleSubmit(handleRegister)} title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;

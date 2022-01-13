import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { Container, Form, Fields, TransactionTypeContainer } from './style';

import Header from '../../components/Header';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelectButton';
import InputForm from '../../components/Form/InputForm';

import CategorySelect from '../CategorySelect';

import { categories } from '../../utils/categories';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FormProps {
  amount: string;
  name: string;
}

const scheme = Yup.object().shape({
  amount: Yup.string().required('Digite um preço').typeError('Digite um valor numérico'),
  name: Yup.string().required('Digite um nome'),
});

const Register = () => {
  const [transactionTypeButton, setTransactionTypeButton] = useState('');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheme),
  });

  const handleShowModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  const handlePressTypeButton = (type: 'up' | 'down') => {
    setTransactionTypeButton(type);
  };

  const handleRegister = async (form: FormProps) => {
    const dataKey = '@gofinances:transactions';

    if (!transactionTypeButton)
      return Alert.alert(
        'Opa, parece que faltou algo',
        'Você não selecionou se é entrada ou saída',
      );

    if (category.key === 'category')
      return Alert.alert('Opa, parece que faltou algo', 'Você não selecionou a categoria');

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType: transactionTypeButton,
      category: category.key,
    };

    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(data));
      Alert.alert(
        'Boa',
        data.transactionType === 'up'
          ? 'Seu dindin recebido foi cadastrado com sucesso'
          : 'Seu dindin gasto foi cadastrado com sucesso',
      );
    } catch (err) {
      Alert.alert('Oxi', 'Parece que algo de errado aconteceu...');
    }
  };

  useEffect(() => {
    const dataKey = '@gofinances:transactions';

    const getTransactions = async (dataKey: string) => {
      const transactions = await AsyncStorage.getItem(dataKey);
      console.log(transactions);
    };

    getTransactions(dataKey);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title={'Resumo por categoria'} />
        <Form>
          <Fields>
            <InputForm
              control={control}
              error={errors.name && errors.name.message}
              name="name"
              placeholder="Nome"
            />
            <InputForm
              control={control}
              error={errors.amount && errors.amount.message}
              name="amount"
              placeholder="Preço"
            />

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
    </TouchableWithoutFeedback>
  );
};

export default Register;

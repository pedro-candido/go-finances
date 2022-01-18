import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { AllItems, Wrapper } from './style';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { IData } from '../Card';

export interface IDataListProps extends IData {
  id: string;
}

const List = () => {
  const [listData, setListData] = useState<IDataListProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await AsyncStorage.getItem('@gofinances:transactions');

      const transactions = response ? JSON.parse(response) : [];

      const transactionsFormatted = transactions.map((item: IDataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        });
        const date = new Date(item.date);
        const dateFormatted = Intl.DateTimeFormat('pt-br', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
        }).format(date);
      });

      setListData(transactionsFormatted);
    };

    getData();
  }, []);

  return (
    <Wrapper.Container>
      <Wrapper.Title>Listagem</Wrapper.Title>
      <AllItems
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Wrapper.Container>
  );
};

export default List;

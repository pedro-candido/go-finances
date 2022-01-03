import React from 'react';
import Card from '../Card';
import { AllItems, Wrapper } from './style';

import { IData } from '../Card';

export interface IDataListProps extends IData {
  id: string;
}

const List = () => {
  const data: IDataListProps[] = [
    {
      id: '1',
      type: 'positive',
      amount: 'R$ 12.000',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas',
      },
      date: '13/10/2021',
      title: 'Desenvolvimento de Site',
    },
    {
      id: '2',
      type: 'negative',
      amount: 'R$ 12.000',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas',
      },
      date: '13/10/2021',
      title: 'Desenvolvimento de Site',
    },
    {
      id: '3',
      type: 'positive',
      amount: 'R$ 12.000',
      category: {
        icon: 'coffee',
        name: 'Alimentação',
      },
      date: '13/10/2021',
      title: 'Hamburgueria',
    },
    {
      id: '4',
      type: 'positive',
      amount: 'R$ 12.000',
      category: {
        icon: 'shopping-bag',
        name: 'Casa',
      },
      date: '13/10/2021',
      title: 'Aluguel do Apartamento',
    },
  ];
  return (
    <Wrapper.Container>
      <Wrapper.Title>Listagem</Wrapper.Title>
      <AllItems
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Wrapper.Container>
  );
};

export default List;

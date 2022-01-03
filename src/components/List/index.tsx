import React from 'react';
import Card from '../Card';
import { Wrapper } from './style';

interface ArrProps {
  title: string;
  amount: string;
}

const arr: Array<ArrProps> = [
  {
    title: 'Teste 1',
    amount: 'R$ 25,00',
  },
  {
    title: 'Teste 1',
    amount: 'R$ 25,00',
  },
  {
    title: 'Teste 1',
    amount: 'R$ 25,00',
  },
];

const List = () => {
  return (
    <Wrapper.Container>
      <Wrapper.Title>Listagem</Wrapper.Title>
      <Wrapper.AllItems data={arr} renderItem={() => <Card />} />
    </Wrapper.Container>
  );
};

export default List;

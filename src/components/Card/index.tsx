import React from 'react';
import { Item } from './style';

interface ICategoryProps {
  name: string;
  icon: string;
}

export interface IData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: ICategoryProps;
  date: string;
}

interface ICardProps {
  data: IData;
}

const Card = ({ data }: ICardProps) => {
  return (
    <Item.Box>
      <Item.Title>{data.name}</Item.Title>
      <Item.Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Item.Amount>
      <Item.Footer>
        <Item.Category>
          <Item.Icon name={data.category.icon} />
          <Item.CategoryText>{data.category.name}</Item.CategoryText>
        </Item.Category>
        <Item.CardDate>{data.date}</Item.CardDate>
      </Item.Footer>
    </Item.Box>
  );
};

export default Card;

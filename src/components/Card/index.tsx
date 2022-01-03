import React from 'react';
import { Item } from './style';

const Card = () => {
  return (
    <Item.Box>
      <Item.Title>Comida x</Item.Title>
      <Item.Amount>R$ 20,50</Item.Amount>
      <Item.Footer>
        <Item.Category>
          <Item.Icon name="dollar-sign" />
          <Item.CategoryText>Categoria</Item.CategoryText>
        </Item.Category>
        <Item.CardDate>13/10/2021</Item.CardDate>
      </Item.Footer>
    </Item.Box>
  );
};

export default Card;

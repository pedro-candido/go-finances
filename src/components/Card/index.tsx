import React from 'react';
import { View } from 'react-native';
import { Item } from './style';

const Card = () => {
  return (
    <Item.Box>
      <Item.Title>Comida x</Item.Title>
      <Item.Amount>R$ 20,50</Item.Amount>
      <Item.Footer>
        <View>
          <Item.Icon />
          <Item.Text></Item.Text>
        </View>
        <Item.Text></Item.Text>
      </Item.Footer>
    </Item.Box>
  );
};

export default Card;

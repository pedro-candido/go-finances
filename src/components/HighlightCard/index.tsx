import React from 'react';
import { Text, View } from 'react-native';
import { Card } from './style';

interface IHighlightCardProps {
  icon: string;
  title: string;
  value: string;
  text: string;
}

const HighlightCard = ({ icon, title, value, text }: IHighlightCardProps) => {
  return (
    <Card.Container>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Icon name={icon} />
      </Card.Header>
      <Card.Footer>
        <Card.Amount>{value}</Card.Amount>
        <Card.LastTransaction>{text}</Card.LastTransaction>
      </Card.Footer>
    </Card.Container>
  );
};

export default HighlightCard;

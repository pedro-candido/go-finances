import React from 'react';
import { Card } from './style';

interface IHighlightCardProps {
  iconType: 'up' | 'down' | 'total';
  title: string;
  value: string;
  text: string;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

const HighlightCard = ({ iconType, title, value, text }: IHighlightCardProps) => {
  return (
    <Card.Container type={iconType}>
      <Card.Header>
        <Card.Title type={iconType}>{title}</Card.Title>
        <Card.Icon name={icons[iconType]} type={iconType} />
      </Card.Header>
      <Card.Footer>
        <Card.Amount type={iconType}>{value}</Card.Amount>
        <Card.LastTransaction type={iconType}>{text}</Card.LastTransaction>
      </Card.Footer>
    </Card.Container>
  );
};

export default HighlightCard;

import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Icon, Title } from './style';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface ITransactionTypeButtonProps extends RectButtonProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

const TransactionTypeButton = ({ type, title, isActive, ...rest }: ITransactionTypeButtonProps) => {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={icons[type]} isActive={isActive} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;

import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './style';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: IButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;

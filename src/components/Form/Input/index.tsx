import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './style';

interface InputProps extends TextInputProps {}

const Input = ({ ...rest }: TextInputProps) => {
  return <Container {...rest} />;
};

export default Input;

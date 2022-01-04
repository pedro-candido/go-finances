import React from 'react';
import { Container, Title } from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

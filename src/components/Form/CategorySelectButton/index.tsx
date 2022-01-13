import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Category, Icon } from './styles';

interface Category {
  key: string;
  name: string;
}

interface CategoryProps extends RectButtonProps {
  category: string;
}

const CategorySelectButton = ({ category, ...rest }: CategoryProps) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Category category={category}>{category}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;

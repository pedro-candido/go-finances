import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IAmountProps {
  type: 'positive' | 'negative';
}

const Amount = styled.Text<IAmountProps>`
  margin-top: ${RFValue(2)}px;
  margin-bottom: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.regular400};
  color: ${({ type, theme }) =>
    type === 'positive' ? theme.colors.light.success : theme.colors.light.attention};

  font-size: ${RFValue(20)}px;
`;

const Box = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 17px 24px;
  border-radius: 5px;
  margin-bottom: 5%;
`;

const CardDate = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular400};
`;

const Category = styled.View`
  flex-direction: row;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.regular400};
`;

const CategoryText = styled.Text`
  margin-left: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular400};
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular400};
`;

export const Item = {
  Amount,
  Box,
  Category,
  CategoryText,
  CardDate,
  Footer,
  Icon,
  Title,
};

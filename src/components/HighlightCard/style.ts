import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

const Container = styled.View<TypeProps>`
  background-color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.light.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  padding: 19px 23px 42px 23px;
  border-radius: 5px;
  margin-right: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Footer = styled.View``;

const Amount = styled.Text<TypeProps>`
  color: ${({ type, theme }) => (type === 'total' ? theme.colors.shape : theme.colors.dark_text)};
  font-family: ${({ theme }) => theme.fonts.medium500};
  font-size: 32px;
  margin-top: 38px;
`;

const Icon = styled(Feather)<TypeProps>`
  font-size: 40px;
  ${({ type }) =>
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.light.success};
    `};
  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.light.attention};
    `};
  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `};
`;

const Title = styled.Text<TypeProps>`
  color: ${({ type, theme }) => (type === 'total' ? theme.colors.shape : theme.colors.dark_text)};
  font-family: ${({ theme }) => theme.fonts.medium500};
  font-size: 14px;
`;

const LastTransaction = styled.Text<TypeProps>`
  color: ${({ type, theme }) => (type === 'total' ? theme.colors.shape : theme.colors.text)};
  font-family: ${({ theme }) => theme.fonts.regular400};
  font-size: 12px;
`;

export const Card = {
  Container,
  Header,
  Icon,
  LastTransaction,
  Title,
  Footer,
  Amount,
};

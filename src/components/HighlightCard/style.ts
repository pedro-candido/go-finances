import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

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

const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.dark_text};
  font-family: ${({ theme }) => theme.fonts.medium500};
  font-size: 32px;
  margin-top: 38px;
`;

const Icon = styled(Feather)`
  font-size: 40px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark_text};
  font-family: ${({ theme }) => theme.fonts.medium500};
  font-size: 14px;
`;

const LastTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.text};
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

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Fields = styled.View``;

export const Form = styled.View`
  flex: 1;
  padding: 24px;

  justify-content: space-between;
`;

export const TransactionTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

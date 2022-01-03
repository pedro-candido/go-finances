import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${RFValue(14)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular400};
`;

export const Form = styled.View`
  flex: 1;
  padding: 24px;
`;

import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputTextProps {
  category: string;
}

export const Container = styled(RectButton)`
  margin-top: 8px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular400};
  padding: 18px 8px 18px 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  border-radius: 5px;
`;

export const Category = styled.Text<InputTextProps>`
  font-family: ${({ theme }) => theme.fonts.regular400};
  color: ${({ category, theme }) =>
    category === 'Categoria' ? theme.colors.text : theme.colors.dark_text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

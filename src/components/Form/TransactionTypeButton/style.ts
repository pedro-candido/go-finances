import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down';
}

interface TypeButtonProps extends TypeProps {
  isActive: boolean;
}

export const Container = styled(RectButton)<TypeButtonProps>`
  flex-direction: row;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.text};
  border-width: ${({ isActive }) => (!isActive ? 1.5 : 0)}px;
  border-style: solid;

  border-radius: 5px;
  justify-content: center;
  padding: 16px 35px;
  width: 48%;

  ${({ isActive, type, theme }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${theme.colors.dark.success};
    `};

  ${({ isActive, type, theme }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${theme.colors.dark.attention};
    `};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular400};
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)<TypeButtonProps>`
  margin-right: ${RFValue(12)}px;
  font-size: ${RFValue(24)}px;

  color: ${({ type, theme }) =>
    type === 'up' ? theme.colors.light.success : theme.colors.light.attention};
`;

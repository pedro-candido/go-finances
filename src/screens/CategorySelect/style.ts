import { FlatList, FlatListProps, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { categories } from '../../utils/categories';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';

interface IconProps {
  fontSize?: number;
}

interface CardProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = {
  Wrapper: styled.View`
    flex: 1;
    margin: 2px 24px 32px 24px;
    justify-content: space-between;
  `,
  Amount: styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium500};
    font-size: ${RFValue(15)}px;
  `,
  Category: styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular400};
    font-size: ${RFValue(15)}px;
    margin-left: 16px;
  `,
  Card: styled(RectButton)<CardProps>`
    padding: 13px 20px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.dark.secondary : theme.colors.shape};
    margin: 8px 0;
    border-radius: 5px;
  `,
  CardWrapper: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Graph: styled.View``,
  Title: styled.Text``,
  Icon: styled(Feather)<IconProps>`
    font-size: ${({ fontSize }) => fontSize ?? RFValue(24)}px;
  `,
};

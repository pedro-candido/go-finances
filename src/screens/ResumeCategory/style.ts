import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { categories } from '../../utils/categories';

interface IconProps {
  fontSize?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = {
  Wrapper: styled.View`
    margin: 41px 24px 32px 24px;
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
  Card: styled.View`
    padding: 13px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shape};
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
  List: styled(
    FlatList as new (props: FlatListProps<typeof categories>) => FlatList<typeof categories>,
  )`
    margin: 24px 0px;
  `,
  Title: styled.Text``,
  Icon: styled(Feather)<IconProps>`
    font-size: ${({ fontSize }) => fontSize ?? RFValue(24)}px;
  `,
};

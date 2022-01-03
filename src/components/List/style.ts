import { FlatList, FlatListProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { IDataListProps } from '.';

const Container = styled.View``;

const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular400};

  margin-bottom: ${RFValue(16)}px;
`;

export const AllItems = styled(
  FlatList as new (props: FlatListProps<IDataListProps>) => FlatList<IDataListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})`
  margin-bottom: ${RFValue(16)}px;
`;

export const Wrapper = {
  Container,
  Title,
};

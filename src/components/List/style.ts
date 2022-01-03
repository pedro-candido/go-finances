import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Container = styled.View``;

const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular400};

  margin-bottom: ${RFValue(16)}px;
`;

const AllItems = styled.FlatList``;

export const Wrapper = {
  Container,
  Title,
  AllItems,
};

import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.light.secondary};
  width: 100%;

  align-items: center;
  border-radius: 5px;
  padding: 17px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium500};
`;

import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  height: 100%;
`;

export const Header = styled.View`
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.light.secondary};
  font-size: ${RFValue(24)}px;
`;

const Box = styled.View`
  align-items: ${({ theme }) => theme.alignments.center};
  flex-direction: row;
`;

const Info = styled.View`
  margin-left: 24px;
`;

const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular400};
  font-size: 18px;
`;

const Photo = styled.Image`
  height: ${RFValue(55)}px;
  width: ${RFValue(55)}px;
  border-radius: 10px;
`;
const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold700};
  font-size: 18px;
`;
const Wrapper = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HighlightCards = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  position: absolute;
  top: ${RFPercentage(20)}px;
`;

export const User = {
  Box,
  Info,
  Greeting,
  Photo,
  UserName,
  Wrapper,
};

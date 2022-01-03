import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.dark_text};

  font-family: ${({ theme }) => theme.fonts.regular400};
  font-size: 14px;
  width: 100%;

  margin-bottom: 18px;
  padding: 16px 18px;

  border-radius: 5px;
`;

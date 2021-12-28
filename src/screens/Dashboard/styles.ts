import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: ${({ theme }) => theme.alignments.center};
  justify-content: ${({ theme }) => theme.alignments.center};
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular400};
`;

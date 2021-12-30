import React from 'react';
import { View } from 'react-native';
import HighlightCard from '../../components/HighlightCard';
import { Container, Header, User, Icon, HighlightCards } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <User.Wrapper>
          <User.Box>
            <User.Photo source={{ uri: 'https://avatars.githubusercontent.com/u/33555606?v=4' }} />
            <User.Info>
              <User.Greeting>Olá,</User.Greeting>
              <User.UserName>Pedro</User.UserName>
            </User.Info>
          </User.Box>
          <Icon name="power" />
        </User.Wrapper>
      </Header>
      <HighlightCards>
        <HighlightCard icon="power" text="Hello World" title="Entrada" value="200.000" />
        <HighlightCard icon="power" text="Hello World" title="Entrada" value="200.000" />
        <HighlightCard icon="power" text="Hello World" title="Entrada" value="200.000" />
      </HighlightCards>
    </Container>
  );
};

export default Dashboard;

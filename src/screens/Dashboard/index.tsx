import React from 'react';
import { View } from 'react-native';
import HighlightCard from '../../components/HighlightCard';
import List from '../../components/List';
import { Container, Header, User, Icon, HighlightCards, Transactions, Logout } from './styles';

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
          <Logout>
            <Icon name="power" />
          </Logout>
        </User.Wrapper>
      </Header>
      <HighlightCards>
        <HighlightCard iconType="up" text="Hello World" title="Entrada" value="200.000" />
        <HighlightCard iconType="down" text="Hello World" title="Saída" value="200.000" />
        <HighlightCard iconType="total" text="Hello World" title="Total" value="200.000" />
      </HighlightCards>
      <Transactions>
        <List />
      </Transactions>
    </Container>
  );
};

export default Dashboard;

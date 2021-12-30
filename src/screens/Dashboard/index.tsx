import React from 'react';
import { Container, Header, User, Icon } from './styles';

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
    </Container>
  );
};

export default Dashboard;

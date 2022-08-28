import { Container } from '@chakra-ui/react';
import * as React from 'react';
import { NavBar } from '../../Components';
import ChatsView from './Chats.view';

const Chats = () => {
  const [chat, setChat] = React.useState({ user: null, messages: [] });

  const handleLoadChat = user => {
    setChat({ ...chat, user });
  };

  return (
    <Container maxW="container.xl">
      <NavBar />
      <ChatsView handleLoadChat={handleLoadChat} chat={chat} />
    </Container>
  );
};

export default Chats;

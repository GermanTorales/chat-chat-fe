import * as React from 'react';
import { Box, Divider, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { ChatFooter, ChatHeader, ChatMessages, UserListModal } from '../../Components';

const ChatsView = ({ chat, handleLoadChat }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputMessage, setInputMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages(old => [...old, { from: 'me', text: data }]);
    setInputMessage('');

    setTimeout(() => {
      setMessages(old => [...old, { from: 'computer', text: data }]);
    }, 1000);
  };

  return (
    <Flex h="85vh" mt="5">
      <Box width="25%">
        <Button onClick={onOpen} width="90%" bg="green.600" color="white" _hover={{ bg: 'green.400' }}>
          New chat
        </Button>
      </Box>

      <Divider orientation="vertical" borderColor="black" />

      {chat?.user && (
        <Flex w="75%" h="100%" justify="center">
          <Flex w="90%" h="100%" flexDir="column">
            <ChatHeader receiver={chat.user} />
            <Divider />
            <ChatMessages messages={chat.messages} />
            <Divider />
            <ChatFooter inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} />
          </Flex>
        </Flex>
      )}

      <UserListModal isOpen={isOpen} onClose={onClose} handleLoadChat={handleLoadChat} />
    </Flex>
  );
};

export default ChatsView;

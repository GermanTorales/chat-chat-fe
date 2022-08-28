import React from 'react';
import { Flex, Avatar, AvatarBadge, Text } from '@chakra-ui/react';

const ChatHeader = ({ receiver }) => {
  return (
    <Flex w="100%" mb="2">
      <Avatar size="md" name={receiver?.name} src={receiver?.avatar}>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          {receiver?.name}
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default ChatHeader;

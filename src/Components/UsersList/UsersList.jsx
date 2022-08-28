import * as React from 'react';
import {
  Avatar,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { BiMessageAdd } from 'react-icons/bi';
import { getUsers } from '../../Services';

const UserListModal = ({ isOpen, onClose, handleLoadChat }) => {
  const [users, setUsers] = React.useState([]);

  const loadChat = user => {
    handleLoadChat(user);

    onClose();
  };

  React.useEffect(() => {
    const fn = async () => {
      const response = await getUsers();

      if (!response.dataError && !response.serviceError) setUsers(response.data);
    };

    fn();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {users?.map(user => (
              <Flex justifyContent="space-between" key={user._id} mt="4">
                <Flex alignItems={'center'}>
                  <Avatar size="xs" />
                  <Text ml="2">{user.username}</Text>
                </Flex>
                <Flex alignItems={'center'}>
                  <BiMessageAdd fontSize="30" color="darkblue" cursor={'pointer'} onClick={() => loadChat(user)} />
                </Flex>
              </Flex>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserListModal;

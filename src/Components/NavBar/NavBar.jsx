import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react';
import { IoMdChatbubbles } from 'react-icons/io';
import { Context } from '../../Config/context';
import { signOut } from '../../Services';

const NavBar = () => {
  const { user, setUser } = React.useContext(Context);
  const navigate = useNavigate();

  const logOug = async () => {
    signOut();

    setUser(null);

    navigate('/');
  };

  return (
    <Flex bg="blue.800" color="white" padding="2" minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">GL Chat</Heading>
      </Box>

      <Spacer />

      {user?.username ? (
        <>
          <Box p="2">
            <Link to="/chats">
              <IoMdChatbubbles fontSize="45" cursor="pointer" />
            </Link>
          </Box>
          <Flex alignItems="center">
            <Menu>
              <MenuButton as={Button} color="black" rightIcon={<AiOutlineUser fontSize="30" />}>
                {user.username}
              </MenuButton>
              <MenuList color="black">
                <MenuItem onClick={logOug}>Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </>
      ) : (
        <ButtonGroup gap="2">
          <Link to="/signup">
            <Button colorScheme="linkedin">Sign Up</Button>
          </Link>
          <Link to="/signin">
            <Button colorScheme="green">Log in</Button>
          </Link>
        </ButtonGroup>
      )}
    </Flex>
  );
};

export default NavBar;

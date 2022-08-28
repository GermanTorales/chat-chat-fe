import * as React from 'react';
import { Button, Flex, Box, Link, Text } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const RegisterView = ({ handleInputChange, inputs, onSubmit }) => {
  return (
    <Container mt="200">
      <Flex>
        <FormControl>
          <Flex justifyContent="space-between">
            <Box>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={inputs?.name} onChange={handleInputChange} id="name" placeholder="Enter your name" />
            </Box>

            <Box>
              {' '}
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={inputs?.username}
                onChange={handleInputChange}
                id="username"
                placeholder="Enter your username"
              />
            </Box>
          </Flex>

          <Flex justifyContent="space-between" mt="2">
            <Box mt="5">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={inputs?.password}
                onChange={handleInputChange}
                id="password"
                placeholder="Enter your password"
              />
            </Box>

            <Box mt="5">
              <FormLabel>Confirm password</FormLabel>
              <Input
                type="password"
                value={inputs?.confirmPassword}
                onChange={handleInputChange}
                id="confirmPassword"
                placeholder="Enter your confirm password"
              />
            </Box>
          </Flex>

          <Box>
            <Button onClick={onSubmit} mt="10" width="lg" colorScheme="linkedin" variant="solid">
              Sign Up
            </Button>
          </Box>

          <Box mt="5">
            <Box color="gray" textAlign="center">
              <Text>
                If you have an account, go to the{' '}
                <Link as={RouterLink} color="teal.500" to="/signin">
                  login
                </Link>{' '}
                page
              </Text>
            </Box>
          </Box>
        </FormControl>
      </Flex>
    </Container>
  );
};

export default RegisterView;

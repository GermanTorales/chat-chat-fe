import * as React from 'react';
import { Button, Flex, Box, Text, Link } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, Container } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const LogInView = ({ handleInputChange, inputs, onSubmit }) => {
  return (
    <Container mt="200">
      <Flex>
        <FormControl>
          <Box>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={inputs?.username} onChange={handleInputChange} id="username" placeholder="Enter your username" />
          </Box>

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

          <Box>
            <Button onClick={onSubmit} mt="10" width="lg" colorScheme="linkedin" variant="solid">
              Sign In
            </Button>
          </Box>

          <Box mt="5">
            <Box color="gray" textAlign="center">
              <Text>
                If you not have an account, go to the{' '}
                <Link as={RouterLink} color="teal.500" to="/signup">
                  sign up
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

export default LogInView;

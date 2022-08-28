import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Chats, Home, LogIn, Register } from './Pages';
import { getFromLocalStorage } from './Helpers/localStorage.helper';
import { Context } from './Config/context';
import { me } from './Services';
import socket from './Config/socket';

const App = () => {
  const existToken = getFromLocalStorage('token');
  const { user, setUser } = React.useContext(Context);

  React.useEffect(() => {
    const fn = async () => {
      const response = await me(existToken);

      if (!response?.dataError && !response.serviceError) {
        socket.on('connect', () => {
          console.log('I CONNECTED');
        });

        setUser(response.data);
      }
    };

    if (existToken && !user?.username) fn();
    else if (!existToken) setUser(null);
  }, [existToken, user]);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/signin" element={<LogIn />} />
          <Route exact path="/chats" element={<Chats />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;

import socketClient from 'socket.io-client';
import { getFromLocalStorage } from '../Helpers/localStorage.helper';
import { chatsMs } from './envVars';

const token = getFromLocalStorage('token');

console.log(token);

const socket = socketClient(chatsMs.url, {
  transports: ['websocket', 'polling', 'flashsocket'],
  extraHeaders: { authorization: `Bearer ${token}` },
  auth: {
    authorization: `Bearer ${token}`,
  },
});

export default socket;

import axios from 'axios';
import { usersMs } from '../Config';
import { deleteFromLocalStorage, getFromLocalStorage, saveInLocalStorage } from '../Helpers/localStorage.helper';

export const register = async (name, username, password, confirmPassword) => {
  try {
    const usersMsUrl = `${usersMs.url}/users`;
    const response = await axios.post(usersMsUrl, { name, username, password, confirmPassword });

    if (response.status === 201 || response.status === 200) return { serviceError: false, dataError: false, data: response?.data };
  } catch (error) {
    const data = error?.response?.data;

    if (error?.response?.status === 400) return { serviceError: false, dataError: true, data };

    return { serviceError: true, dataError: false, data };
  }
};

export const login = async (username, password) => {
  try {
    const usersMsUrl = `${usersMs.url}/auth`;
    const response = await axios.post(usersMsUrl, { username, password });

    if (response.status === 201 || response.status === 200) {
      saveInLocalStorage('token', response?.data?.token);

      return { serviceError: false, dataError: false, data: response?.data };
    }
  } catch (error) {
    const data = error?.response?.data;

    if (error?.response?.status === 400) return { serviceError: false, dataError: true, data };

    return { serviceError: true, dataError: false, data };
  }
};

export const me = async () => {
  try {
    const usersMsUrl = `${usersMs.url}/users/me`;
    const token = getFromLocalStorage('token');
    const response = await axios.get(usersMsUrl, { headers: { Authorization: `Bearer ${token}` } });

    if (response.status === 201 || response.status === 200) return { serviceError: false, dataError: false, data: response?.data };
  } catch (error) {
    const data = error?.response?.data;

    if (error?.response?.status === 400) return { serviceError: false, dataError: true, data };

    return { serviceError: true, dataError: false, data };
  }
};

export const signOut = () => {
  deleteFromLocalStorage('token');
};

export const getUsers = async () => {
  try {
    const usersMsUrl = `${usersMs.url}/users`;
    const token = getFromLocalStorage('token');
    const response = await axios.get(usersMsUrl, { headers: { Authorization: `Bearer ${token}` } });

    if (response.status === 201 || response.status === 200) return { serviceError: false, dataError: false, data: response?.data };
  } catch (error) {
    const data = error?.response?.data;

    if (error?.response?.status === 400) return { serviceError: false, dataError: true, data };

    return { serviceError: true, dataError: false, data };
  }
};

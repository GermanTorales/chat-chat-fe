import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import LogInView from './LogIn.view';
import { SweetAlertSuccess, SweetAlertError } from '../../Commons/SweetAlert';
import { login } from '../../Services';
import { Context } from '../../Config/context';

const LogIn = () => {
  const [inputs, setInputs] = React.useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { setUser } = React.useContext(Context);

  const handleInputChange = e => {
    const { id, value } = e.target;

    setInputs({ ...inputs, [id]: value });
  };

  const onSubmit = async () => {
    const { username, password } = inputs;

    const response = await login(username, password);

    if (response?.dataError) {
      SweetAlertError({ title: 'Some data are invalid', text: response?.data?.message });
    } else if (response?.serviceError) {
      SweetAlertError({ title: 'Server error', text: '' });
    } else {
      SweetAlertSuccess({ title: 'Success', text: response?.data?.message });

      setUser(response?.data);

      navigate('/');
    }
  };

  return <LogInView inputs={inputs} handleInputChange={handleInputChange} onSubmit={onSubmit} />;
};

export default LogIn;

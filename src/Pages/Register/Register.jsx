import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SweetAlertSuccess, SweetAlertError } from '../../Commons/SweetAlert';
import { register } from '../../Services';
import RegisterView from './Register.view';

const Register = () => {
  const [inputs, setInputs] = useState({ name: '', username: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { id, value } = e.target;

    setInputs({ ...inputs, [id]: value });
  };

  const onSubmit = async () => {
    const { name, username, password, confirmPassword } = inputs;

    const response = await register(name, username, password, confirmPassword);

    console.log(response);

    if (response?.dataError) {
      SweetAlertError({ title: 'Some data are invalid', text: response?.data?.message });
    } else if (response?.serviceError) {
      SweetAlertError({ title: 'Server error', text: '' });
    } else {
      SweetAlertSuccess({ title: 'Success', text: response?.data?.message });

      navigate('/');
    }
  };

  return <RegisterView inputs={inputs} onSubmit={onSubmit} handleInputChange={handleInputChange} />;
};

export default Register;

import * as React from 'react';
import Swal from 'sweetalert2';

export const SweetAlertSuccess = ({ title, text }) => {
  return Swal.fire({
    title,
    text,
    icon: 'success',
  });
};

export const SweetAlertError = ({ title, text }) => {
  return Swal.fire({
    title,
    text,
    icon: 'error',
  });
};

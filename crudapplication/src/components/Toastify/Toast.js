import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = ({ message }) => {


  return (
    <div>
      {toast(message)}
      <ToastContainer />
    </div>
  );

}
export default Toast;

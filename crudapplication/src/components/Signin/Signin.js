import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signin.css";
import Modals from '../Modals/Modals';
import { start } from '../../baseURL';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Signin = () => {
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({
    isShown: false,
    ModalTitle: "",
    ModalBody: "",
  });
  const history = useHistory();

  function validateForm() {
    let flag = true;
    if (password.length < 6) {
      setModal({
        isShown: true,
        ModalTitle: "Password Error",
        ModalBody: "Password must be more than 6 characters"
      });

      flag = false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setModal({
        isShown: true,
        ModalTitle: "Email Error",
        ModalBody: "Please Enter a valid Email"
      });

      flag = false;
    }
    return flag;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const signin = async () => {
    console.log("Event");
    if (!validateForm()) {
      return;
    }
    let data = { 'email': email, 'password': password };
    const response = await axios({
      url: start + "/login",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    if (response.data.status === 'false') {
      setModal({
        isShown: true,
        ModalTitle: "Login Error",
        ModalBody: "Please Enter a valid Email & Password Combination "
      });
    }
    else {

      setModal({
        isShown: true,
        ModalTitle: "Login Success",
        ModalBody: "You have logged in successfully."
      });
      localStorage.setItem('email', email);
      localStorage.setItem('token', response.data.data.token);
      history.push('/home');
    }





  }
  const signup = () => {

    history.push("/register");

  }

  return (
    <div className="container" style={{ "paddingTop": "25px" }}>
      <h3>Login</h3>
      <hr />
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" onClick={signin}>
            Login
        </Button>
          <Button block size="lg" type="submit" onClick={signup}>
            signup
        </Button>
        </Form>
        <Modals
          isShown={modal.isShown}
          setIsShown={setModal}
          ModalTitle={modal.ModalTitle}
          ModalBody={modal.ModalBody}
        />
      </div>
    </div>
  );
}
export default Signin;
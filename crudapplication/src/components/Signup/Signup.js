import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import Modals from '../Modals/Modals';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { start } from '../../baseURL';
const Signup = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [modal, setModal] = useState({
    isShown: false,
    ModalTitle: "",
    ModalBody: "",
  });
  const history = useHistory();


  function validateForm() {
    if (password === "" || email === "" || password === "") {
      setModal({
        isShown: true,
        ModalTitle: "Sinup Error",
        ModalBody: "Please Enter all the details"
      });
      return false;
    }
    let flag = true;

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setModal({
        isShown: true,
        ModalTitle: "Email Error",
        ModalBody: "Please Enter a valid Email"
      });

      return false;
    }

    if (password.length < 6) {
      setModal({
        isShown: true,
        ModalTitle: "Password Error",
        ModalBody: "Password must be more than 6 characters"
      });


      return false;
    }

    if (!name.match(/[a-zA-Z]{6,}/)) {
      setModal({
        isShown: true,
        ModalTitle: "Name Error",
        ModalBody: "Name should contain only alphabets and minimum length is 6"
      });

      return false;
    }
    return flag;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const signup = async () => {
    console.log("Event");
    if (!validateForm()) {
      return;
    }
    let data = { 'email': email, 'password': password, 'name': name };
    const response = await axios({
      url: start + "/signup",
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
        ModalBody: "User Created successfully."
      });
      history.push('/login');
    }





  }


  const signin = () => {

    history.push("/login");

  }

  return (
    <div className="container" style={{ "paddingTop": "25px" }}>
      <h3>signup</h3>
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
          <Form.Group size="lg" controlId="password">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" onClick={signup}>
            Signup
        </Button>
          <Button block size="lg" type="submit" onClick={signin}>
            Signin
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
export default Signup;
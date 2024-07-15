import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../model/signup";

function SignUpPage() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(userName, pwd);
    } catch (error) {}
  };

  const idSubmitHandler = (e) => {
    setUserName(e.target.value);
  };

  const pwdSubmitHandler = (e) => {
    setPwd(e.target.value);
  };

  return (
    <Background>
      <Title>회원가입</Title>
      <InputForm>
        <form action="/choice" onSubmit={handleSubmit}>
          <Input
            type="text"
            required
            placeholder="Full Name"
            id="name"
            onChange={idSubmitHandler}
          />
          <Input
            type="password"
            required
            placeholder="Password"
            id="passowrd"
            onChange={pwdSubmitHandler}
          />
          <Input type="password" required placeholder="Confirm Password" />
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </form>
        <User>
          이미 회원이신가요? <a onClick={login}>Login</a>
        </User>
      </InputForm>
    </Background>
  );
}

export default SignUpPage;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background: #34a961;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 50px;
  color: white;
  text-align: center;
  margin: 0;
  font-weight: bold;
`;

const InputForm = styled.div`
  width: 800px;
  height: 300px;
  background: #f6fff5;
  border-radius: 40px;
  margin: 20px;
  padding: 50px;
`;

const Input = styled.input`
  padding: 0 20px;
  width: 400px;
  height: 50px;
  font-size: 20px;
  border: 1px solid #359b24;
  margin-bottom: 20px;
  outline: none;
`;

const SignUpButton = styled.button`
  display: block;
  width: 250px;
  height: 60px;
  background: #34a961;
  color: white;
  font-size: 30px;
  border-radius: 30px;
  border: none;
  margin: 0 auto;

  &:hover {
    background: #c0dfbd;
    transition: 200ms;
  }

  &:active {
    background: #92c58c;
  }
`;

const User = styled.p`
  color: gray;
  font-size: 15px;

  & a {
    color: #3fbcff;
  }

  & a:hover {
    color: #0d6ea2;
    transition: 200ms;
  }

  & a:active {
    color: #0d5f8c;
  }
`;

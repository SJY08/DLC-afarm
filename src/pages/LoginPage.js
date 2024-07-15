import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup");
  };

  const completeLogin = () => {
    navigate("/home");
  };

  return (
    <Background>
      <Title>afarm</Title>
      <SubTitle>ai in home farming</SubTitle>
      <InputForm>
        <form onSubmit={completeLogin}>
          <Input type="text" placeholder="User id" required />
          <Input
            type="password"
            placeholder="Password"
            required
            maxLength={12}
          />
          <LoginButton>Login</LoginButton>
        </form>

        {/* <ForgetPassword>Forget password?</ForgetPassword> */}
        <NotUser>
          아직 회원이 아니신가요? <a onClick={signup}>Sign up</a>
        </NotUser>
      </InputForm>
    </Background>
  );
}

export default LoginPage;

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

const SubTitle = styled.p`
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0;
`;

const InputForm = styled.div`
  width: 800px;
  height: 250px;
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

/*
const Checkbox = styled.input`
  display: none;

  & + label {
    margin: 0 4px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #dbedd9;
    border-radius: 10px;
    text-align: center;
    position: relative;
    top: 4px;
  }

  &:checked + label::after {
    content: "✔";
    font-size: 15px;
    color: #0f640d;
    text-align: center;
    position: absolute;
    left: 4px;
    top: 0;
  }
`;

const RememberMeText = styled.label`
  color: #97c292;
`;
*/

const ForgetPassword = styled.a`
  color: #34a961;
  font-weight: bold;
`;

const NotUser = styled.p`
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

const LoginButton = styled.button`
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

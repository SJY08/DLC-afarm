import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <Background>
      <Title>afarm</Title>
      <SubTitle>ai in home farming</SubTitle>
      <Line />
      <StartButton type="submit" onClick={login}>
        시작하기
      </StartButton>
    </Background>
  );
}

export default StartPage;

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

const Line = styled.hr`
  width: 600px;
  margin-bottom: 40px;
`;

const StartButton = styled.button`
  width: 250px;
  height: 60px;
  background: #ddf6da;
  color: #34a961;
  font-size: 30px;
  border-radius: 30px;
  border: none;

  &:hover {
    background: #c0dfbd;
    transition: 200ms;
  }

  &:active {
    background: #92c58c;
  }
`;

import React from "react";
import styled from "styled-components";
import lettuce from "../images/lettuce.png";
import bean from "../images/bean.png";
import greenonion from "../images/greenonion.png";
import tomato from "../images/tomato.png";
import Header from "../components/Header";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function PlantChoice() {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />
      <Contianer>
        <BlockLine>
          <Item>
            <Title>상추</Title>
            <Image src={lettuce} />
            <Date>28~42일</Date>
            <Select onClick={gotohome}>선택하기</Select>
          </Item>

          <Item>
            <Title>강낭콩</Title>
            <Image src={bean} />
            <Date>50~80일</Date>
            <Select onClick={gotohome}>선택하기</Select>
          </Item>

          <Item>
            <Title>대파</Title>
            <Image src={greenonion} />
            <Date>90~120일</Date>
            <Select onClick={gotohome}>선택하기</Select>
          </Item>
        </BlockLine>

        <BlockLine>
          <Item>
            <Title>토마토</Title>
            <Image src={tomato} />
            <Date>60~75일</Date>
            <Select onClick={gotohome}>선택하기</Select>
          </Item>

          <Item>
            <Title>작물선택</Title>
            <p>
              <HiOutlineX id="x" />
            </p>
            <Select onClick={gotohome}> 선택하기</Select>
          </Item>
        </BlockLine>
      </Contianer>
    </>
  );
}

export default PlantChoice;

const Contianer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
`;

const BlockLine = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 2px solid #34a961;
  border-radius: 15px;
  box-shadow: 0 0 15px #00000025;
  margin: 20px;

  #x {
    margin: 0;
    padding: 0;
    height: 80px;
    width: 80px;
  }
`;

const Select = styled.button`
  margin-top: 10px;
  border: none;
  color: white;
  background: #34a961;
  width: 120px;
  height: 40px;
  border-radius: 20px;

  &:hover {
    background: #2d9c58;
    transition: 200ms;
  }

  &:active {
    background: #24884b;
  }
`;

const Image = styled.img`
  height: 100px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
  color: black;
`;

const Date = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #bdbdbd;
`;

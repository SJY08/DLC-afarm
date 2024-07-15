import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Lettuce from "../images/lettuce.png";
import { PiPottedPlantFill } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  const toManage = () => {
    navigate("/manage");
  };

  const toDiary = () => {
    navigate("/diary");
  };
  return (
    <>
      <header>
        <Header />
      </header>

      <Container>
        <MyPlant>
          <MyPlantName>나의 식물 : 상추</MyPlantName>
          <img src={Lettuce} id="img" />
          <GrowLevel>성장도 : %</GrowLevel>
        </MyPlant>
        <ButtonContainer>
          <PlantButton onClick={toManage}>
            <PiPottedPlantFill id="icon" />
            <p>식물관리하기</p>
          </PlantButton>
          <PlantButton onClick={toDiary}>
            <AiOutlineCalendar id="icon" />
            <p>
              식물 일지
              <br />
              작성하기
            </p>
          </PlantButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPlant = styled.div`
  margin: 80px;
  width: 300px;
  height: 420px;
  background: #34a961;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #img {
    height: 180px;
  }
`;

const MyPlantName = styled.p`
  padding-top: 40px;
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const GrowLevel = styled.p`
  text-align: center;
  color: white;
  font-size: 30px;
`;

const ButtonContainer = styled.div`
  display: block;
`;

const PlantButton = styled.button`
  background: #34a961;
  width: 400px;
  height: 150px;
  border-radius: 25px;
  border: none;
  margin: 10px;

  display: flex;
  align-items: center;

  p {
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-left: 30px;
  }

  #icon {
    color: white;
    font-size: 100px;
    float: left;
    margin-left: 20px;
  }

  &:hover {
    background: #279b54;
    transition: 200ms;
  }

  &:active {
    background: #208d4b;
  }
`;

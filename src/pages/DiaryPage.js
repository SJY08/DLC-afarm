import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function DiaryPage() {
  const navigate = useNavigate();

  const toWrite = () => {
    navigate("/write");
  };

  const today = new Date();

  const month = today.getMonth() + 1;

  const day = today.getDate();

  return (
    <>
      <header>
        <Header />
      </header>
      <TitleContainer>
        <Title>일기에 작물 사진을 올려 성장도를 확인하세요</Title>
        <Month>{month}월</Month>
        <Line />
        <AddButton onClick={toWrite}>일기 작성하기</AddButton>
      </TitleContainer>
      <Container>
        {/* <DayDiaryContainer>
          <DayContainer>
            <Day>{day}</Day>
          </DayContainer>
          <DiaryContainer>
            <DiaryTitle>아 집가고싶어</DiaryTitle>
            <SecLine />
            <DiaryText>아 집갈래 아아아아아ㅏㄱ</DiaryText>
          </DiaryContainer>
        </DayDiaryContainer> */}
      </Container>
    </>
  );
}

export default DiaryPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.p`
  font-size: 25px;
  color: black;
  margin: 0;
  padding: 0;
`;

const Month = styled.p`
  font-size: 35px;
  color: black;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Line = styled.hr`
  width: 700px;
`;

const AddButton = styled.button`
  width: 400px;
  height: 50px;
  color: white;
  font-size: 20px;
  background: #34a961;
  border: none;
  border-radius: 50px;

  &:hover {
    background: #2ea05a;
    transition: 200ms;
  }

  &:active {
    background: #359751;
  }
`;

const DayDiaryContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const DayContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background: #e7f9e6;
  border: 1px solid #67a675;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Day = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const DiaryContainer = styled.div`
  width: 480px;
  height: 80px;
  border-radius: 20px;
  background: #e7f9e6;
  border: 1px solid #67a675;
  margin: 0;
  padding: 10px;
`;

const DiaryTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const SecLine = styled.hr`
  width: 480px;
  padding: 0;
  margin: 3px 0;
`;

const DiaryText = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
`;

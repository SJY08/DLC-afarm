import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import lettuce from "../images/lettuce.png";
import Cookies from "js-cookie"; // js-cookie 라이브러리 임포트

function ManagePlant() {
  const [plantInfo, setPlantInfo] = useState({
    username: "",
    temp: "",
    date: "",
    humi: "",
    situation: "",
    rate: "",
  });

  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수
    const fetchPlantInfo = async () => {
      try {
        const token = Cookies.get("token"); // 쿠키에서 토큰 가져오기
        const response = await axios.get(
          "http://localhost:8080/plant_m/get_info",
          {
            headers: {
              Authorization: `${token}`, // JWT 토큰을 사용하는 경우
            },
          }
        );
        setPlantInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching plant info:", error);
      }
    };

    fetchPlantInfo();
  }, []);

  // 성장 단계 계산
  const level = plantInfo.rate ? parseInt(plantInfo.rate) : 0;
  const step =
    1 <= level && level <= 20
      ? 1
      : 21 <= level && level <= 40
      ? 2
      : 41 <= level && level <= 60
      ? 3
      : 61 <= level && level <= 80
      ? 4
      : 5;

  return (
    <>
      <header>
        <Header />
      </header>
      <Body>
        <ProfileContainer>
          <TitleContainer>
            <Title>상추</Title>
            <Date>42일</Date>
          </TitleContainer>

          <PlantProfile>
            <img src={lettuce} alt="Lettuce" />
          </PlantProfile>
        </ProfileContainer>
        <RecordContainer>
          <RecordTitle>토양 수분</RecordTitle>
          <Record>{plantInfo.date}%</Record>
          <RecordTitle>습도</RecordTitle>
          <Record>{plantInfo.humi}%</Record>
          <RecordTitle>온도</RecordTitle>
          <Record>{plantInfo.temp}°C</Record>
        </RecordContainer>

        <NowConditionContainer>
          <NowConditionTitle>현재 상태</NowConditionTitle>
          <NowCondition>
            <NowConditionText>
              {plantInfo.situation === 2 ? "정상입니다." : "질병에 걸렸습니다."}
            </NowConditionText>
          </NowCondition>
          <Line />
          <NowConditionTitle>
            현재 성장도 <Level>{plantInfo.rate}%</Level>
          </NowConditionTitle>
          <LevelBar>
            <Leveling width={plantInfo.rate} />
          </LevelBar>
          <Line />
          <NowConditionTitle>현재 성장 단계</NowConditionTitle>
          <NowConditionTitle>{step}단계</NowConditionTitle>
        </NowConditionContainer>
      </Body>
    </>
  );
}

export default ManagePlant;

// Styled-components 정의 (필요에 따라 작성)

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const TitleContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Title = styled.p`
  float: left;
  color: black;
  font-weight: bold;
  font-size: 40px;
  margin: 0 10px 0 0;
  padding: 0;
`;

const Date = styled.p`
  color: #a8bba7;
  font-size: 30px;
  margin: 0;
  padding: 0;
`;

const PlantProfile = styled.div`
  width: 370px;
  height: 370px;
  border: 1px solid #6e6e6e;
  border-radius: 30px;
  background: linear-gradient(#e9ff92, #fff9c2);
  box-shadow: 0 4px 4px #00000025;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RecordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const RecordTitle = styled.p`
  color: #135b16;
  font-size: 25px;
  margin: 0;
  padding: 0;
`;

const Record = styled.p`
  color: #135b16;
  font-size: 25px;
  margin: 0 0 30px 0;
  padding: 0;
`;

const NowConditionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
  padding: 10px;
`;

const NowConditionText = styled.p`
  font-size: 20px;
  color: black;
  margin: 0;
  padding: 0;
`;

const NowConditionTitle = styled.p`
  color: black;
  font-size: 25px;
  margin: 0;
  padding: 0;
`;

const NowCondition = styled.div`
  width: 400px;
  height: 100px;
  border: 1px solid gray;
  box-shadow: 0 2px 2px #00000025;
  border-radius: 30px;
  margin: 0;
  padding: 10px;
`;

const LevelBar = styled.div`
  height: 50px;
  width: 400px;
  border: 2px solid #c3c3c3;
  box-shadow: 0 2px 2px #00000025;
  border-radius: 25px;
  margin: 0;
  padding: 0;
`;

const Leveling = styled.div`
  margin: 0;
  padding: 0;
  width: ${({ width }) => `${width}%`};
  height: 50px;
  background: linear-gradient(to right, #aeff6e, #ddffc2);
  border-radius: 23px;
`;

const Level = styled.p`
  color: #a8bba7;
  font-size: 20px;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Line = styled.hr`
  width: 400px;
  margin: 20px;
`;

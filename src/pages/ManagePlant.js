import styled from "styled-components";
import Header from "../components/Header";
import lettuce from "../images/lettuce.png";

let level = 90;
let step =
  1 <= level && level <= 20
    ? 1
    : 21 <= level && level <= 40
    ? 2
    : 41 <= level && level <= 60
    ? 3
    : 61 <= level && level <= 80
    ? 4
    : 5;

function ManagePlant() {
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
            <img src={lettuce} />
          </PlantProfile>
        </ProfileContainer>
        <RecordContainer>
          <RecordTitle>토양 수분</RecordTitle>
          <Record>%</Record>
          <RecordTitle>습도</RecordTitle>
          <Record>%</Record>
          <RecordTitle>온도</RecordTitle>
          <Record>°C</Record>
        </RecordContainer>

        <NowConditionContainer>
          <NowConditionTitle>현재 상태</NowConditionTitle>
          <NowCondition></NowCondition>
          <Line />
          <NowConditionTitle>
            현재 성장도 <Level>{level}%</Level>
          </NowConditionTitle>
          <LevelBar>
            <Leveling width={level} />
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
  padding: 0;
`;

const LevelBar = styled.div`
  hegiht: 50px;
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
  height: 46px;
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

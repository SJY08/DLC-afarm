import styled from "styled-components";

function Diary(props) {
  console.log(props);
  const day = props.day;
  const title = props.title;
  const detail =
    props.detail.length > 72
      ? props.detail.slice(0, 72) + " ..."
      : props.detail;

  return (
    <DayDiaryContainer>
      <input type="hidden" id="diary_id" value={props.id} />

      <DayContainer>
        <Day>{day}</Day>
      </DayContainer>
      <DiaryContainer>
        <DiaryTitle>{title}</DiaryTitle>
        <SecLine />
        <DiaryText>{detail}</DiaryText>
      </DiaryContainer>
    </DayDiaryContainer>
  );
}

export default Diary;

const DayDiaryContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
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

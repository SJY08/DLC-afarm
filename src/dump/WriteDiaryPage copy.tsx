import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function WriteDiaryPage() {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const navigate = useNavigate();

  const backDiary = () => {
    navigate("/diary");
  };

  const today = new Date();

  const month = today.getMonth() + 1;
  const day = today.getDate();
  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        <ImageContainer>
          <InputImage
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <InputImageStyle htmlFor="image-upload">
            <p>사진 업로드 하기</p>
          </InputImageStyle>
          {imageUrl && <img src={imageUrl} alt="Uploaded" width={300} />}
        </ImageContainer>

        <InputContainer>
          <TodayDate>
            {month}월 {day}일
          </TodayDate>

          <TitleInput
            required
            minLength={1}
            maxLength={15}
            type="text"
            placeholder="제목을 입력해주세요"
          />
          <DiaryInput
            required
            typeof="text"
            placeholder="내용을 입력해주세요"
          />

          <SubmitButton onClick={backDiary}>저장하기</SubmitButton>
        </InputContainer>
      </Container>
    </>
  );
}

export default WriteDiaryPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputImage = styled.input`
  display: none;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 40px;
`;

const InputImageStyle = styled.label`
  width: 300px;
  height: 50px;
  margin: 30px;
  background: #34a961;
  border-radius: 25px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: white;

  &:hover {
    background: #2b9b56;
    transition: 200ms;
  }

  &:active {
    background: #208d4b;
  }
`;

const TodayDate = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
`;

const TitleInput = styled.input`
  width: 600px;
  height: 40px;
  border: 1px solid #245a27;
  background: #f5fff5;
  font-size: 25px;
  padding: 10px;

  &::placeholder {
    color: #b1bea5;
    font-size: 25px;
  }
`;

const DiaryInput = styled.textarea`
  resize: none;
  width: 600px;
  height: 300px;
  border: 1px solid #245a27;
  background: #ffffff;
  font-size: 20px;
  padding: 10px;
  vertical-align: top;

  &::placeholder {
    color: #b1bea5;
    font-size: 20px;
  }
`;

const SubmitButton = styled.button`
  margin: 0;
  padding: 0;
  width: 250px;
  height: 60px;
  background: #34a961;
  border: none;
  border-radius: 30px;
  font-size: 25px;
  color: white;

  &:hover {
    background: #2b9b56;
    transition: 200ms;
  }

  &:active {
    background: #208d4b;
  }
`;

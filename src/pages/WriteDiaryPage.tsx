import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function WriteDiaryPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState(""); // 제목 상태 추가
  const [diary, setDiary] = useState(""); // 일기 내용 상태 추가

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setSelectedFile(file); // 선택한 파일 저장
    console.log(selectedFile);
  };

  const navigate = useNavigate();

  const backDiary = () => {
    navigate("/diary");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 form 제출 방지

    if (!selectedFile) {
      alert("이미지를 업로드하세요.");
      return;
    }

    if (!title || !diary) {
      alert("제목과 내용을 입력하세요.");
      return;
    }

    // FormData 객체 생성
    const formData = new FormData();
    formData.append("file", selectedFile);

    const diary_formData = new FormData();
    diary_formData.append("files", selectedFile);
    diary_formData.append("title", title); // 제목 추가
    diary_formData.append("content", diary); // 일기 내용 추가

    const token = Cookies.get("token");
    console.log(token);

    try {
      const diary_response = await axios.post(
        "http://localhost:8080/journal/write",
        diary_formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "*/*",
            Authorization: `${token}`, // JWT 토큰을 사용하는 경우
          },
        }
      );

      const response = await axios.post(
        "http://localhost:8080/plant_m/ai",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "*/*",
            Authorization: `${token}`, // JWT 토큰을 사용하는 경우
          },
        }
      );

      if (!(response.status == 200) || !(diary_response.status == 200)) {
        console.log(response.status);

        throw new Error("데이터 업로드에 실패했습니다.");
      }

      const result = await response.data;
      console.log(result); // 서버 응답 결과

      alert("데이터 업로드 성공!");
      backDiary(); // 업로드 성공 후 페이지 이동
    } catch (error) {
      console.error("Error:", error);
      alert("데이터 업로드에 실패했습니다.");
    }
  };

  // 제목 변경 핸들러
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // 일기 내용 변경 핸들러
  const handleDiaryChange = (event) => {
    setDiary(event.target.value);
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

        <InputContainer onSubmit={handleSubmit}>
          <TodayDate>
            {month}월 {day}일
          </TodayDate>

          <TitleInput
            required
            minLength={1}
            maxLength={15}
            type="text"
            placeholder="제목을 입력해주세요"
            value={title} // 제목 상태 값 연결
            onChange={handleTitleChange} // 제목 변경 핸들러 연결
          />
          <DiaryInput
            required
            typeof="text"
            placeholder="내용을 입력해주세요"
            value={diary} // 일기 내용 상태 값 연결
            onChange={handleDiaryChange} // 일기 내용 변경 핸들러 연결
          />

          <SubmitButton type="submit">저장하기</SubmitButton>
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

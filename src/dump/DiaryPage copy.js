import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { getjournal } from "../model/models";
import Cookies from "js-cookie";
import axios from "axios";
import ip from "../model/ip";
import Diary from "../components/Diary";
import DiaryModal from "../components/DiaryModal";

function DiaryPage() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [journalData, setjournalData] = useState();
  const [journalPageData, setJournalPageData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toOpenHandler = () => {
    setIsOpen(true);
  };

  const toCloseHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getjournal = async (token) => {
      try {
        const response = await axios.get(`${ip}/journal/select`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });

        setjournalData(response.data);
        console.log(response);
        console.log(response.data[0]);

        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const pageResponse = async (page) => {
      const response = await axios.get(`${ip}/journal/page?num=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      setJournalPageData(response.data);

      console.log(response.data);
    };
    pageResponse(116);
    getjournal(token);
  }, []);

  const toWrite = () => {
    navigate("/write");
  };

  const today = new Date();

  const month = today.getMonth() + 1;

  const day = today.getDate();

  console.log(journalData);
  console.log(journalPageData);

  // diarymodal props 지정.
  return (
    <>
      <header>
        <Header />
      </header>
      {isOpen && <DiaryModal onClick={toCloseHandler} />}
      <TitleContainer>
        <Title>일기에 작물 사진을 올려 성장도를 확인하세요</Title>
        <Month>{month}월</Month>
        <Line />
        <AddButton onClick={toWrite}>일기 작성하기</AddButton>
      </TitleContainer>
      <Container>
        <Button onClick={toOpenHandler}>
          <Diary title="아" day={8} detail="아 집가고 싶다" />
        </Button>
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
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
`;

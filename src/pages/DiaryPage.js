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
  const [journalData, setJournalData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDiary, setSelectedDiary] = useState(null);

  const today = new Date();

  const month = today.getMonth() + 1;

  const toOpenHandler = async (id) => {
    try {
      const response = await axios.get(`${ip}/journal/page?num=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      setSelectedDiary(response.data); // Store the selected diary's detailed info
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const toCloseHandler = () => {
    setIsOpen(false);
    setSelectedDiary(null); // Clear selected diary data when modal is closed
  };

  // Fetch the list of journals
  useEffect(() => {
    const getJournalList = async () => {
      try {
        const response = await axios.get(`${ip}/journal/select`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        setJournalData(response.data); // Store the fetched journal data
      } catch (error) {
        console.error(error);
      }
    };
    getJournalList(); // Fetch the list on component mount
  }, [token]);

  const toWrite = () => {
    navigate("/write"); // Navigate to write page
  };

  return (
    <>
      <header>
        <Header />
      </header>
      {isOpen && selectedDiary && (
        <DiaryModal data={selectedDiary} onClick={toCloseHandler} />
      )}
      <TitleContainer>
        <Title>일기에 작물 사진을 올려 성장도를 확인하세요</Title>
        <Month>{month}월</Month>
        <Line />
        <AddButton onClick={toWrite}>일기 작성하기</AddButton>
      </TitleContainer>
      <Container>
        {journalData.map((journal, index) => (
          <Button key={index} onClick={() => toOpenHandler(journal.id)}>
            <Diary
              id={journal.id}
              title={journal.title}
              day={new Date(journal.date).getDate()}
              detail={journal.content}
            />
          </Button>
        ))}
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

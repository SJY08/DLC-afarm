import React from "react";
import styled from "styled-components";

function DiaryModal(props) {
  const title = props.data["title"];
  const date = props.data["date"];
  const file = props.data["imageUrls"][0].split("images/")[1];
  const content = props.data["content"];

  console.log(file);

  return (
    <>
      <ModalContainer>
        <ModalBackground>
          <ModalWrapper>
            <TitleContainer>
              <Title>{title}</Title>
              <Date>{date}</Date>
            </TitleContainer>

            <DetailWrapper>
              <ImgContainer>
                <img src={require(`../images/${file}`)} id="img" />
                {/* <Img src={file} /> */}
              </ImgContainer>

              <DetailContainer>{content}</DetailContainer>
            </DetailWrapper>

            <CloseButton onClick={props.onClick}>창 닫기</CloseButton>
          </ModalWrapper>
        </ModalBackground>
      </ModalContainer>
    </>
  );
}

export default DiaryModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
`;

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  background: white;
  border: 1px solid #34a961;
  border-radius: 30px;
  padding: 5px;

  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  width: 750px;
  padding: 0;
  font-size: 25px;
`;

const Date = styled.p`
  width: 100px;
  font-size: 20px;
  color: lightgray;
`;

const DetailWrapper = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  #img {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.div`
  width: 200px;
  height: 267px;
  border-radius: 20px;
  max-width: 200px;
  max-height: 267px;
  background-color: gray;
`;

const DetailContainer = styled.p`
  width: 550px;
  font-size: 20px;
  color: black;
  text-align: center;
`;

const CloseButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: #34a961;
  color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #24884b;
    transition: 200ms;
  }
`;

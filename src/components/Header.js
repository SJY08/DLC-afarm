import React from "react";
import styled from "styled-components";
import { PiPottedPlantFill } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/home");
  };

  return (
    <Bar>
      <HomeButton onClick={gotohome}>
        <PiPottedPlantFill id="Logo" />
      </HomeButton>
    </Bar>
  );
}

export default Header;

const Bar = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 0 0 20px 20px;
  box-shadow: 2px 0 5px #c5c5c577;
  background: #34a961;
`;

const HomeButton = styled.button`
  position: fixed;
  top: 5px;
  left: 20px;
  border: none;
  background: none;

  #Logo {
    float: left;
    font-size: 40px;
    color: white;
  }

  &:hover #Logo {
    color: #dadada;
    transition: 200ms;
  }
`;

const Profile = styled.button`
  position: fixed;
  top: 5px;
  right: 20px;
  border: none;
  background: none;

  #profile {
    color: white;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #288e4f;
  }

  &:hover #profile {
    background: #217b43;
    transition: 200ms;
  }
`;

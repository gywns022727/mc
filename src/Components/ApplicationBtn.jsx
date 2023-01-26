import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ApplicationBtn() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/form");
  };

  return <Btn onClick={click}>입부 신청하기</Btn>;
}

const Btn = styled.button`
  margin-top: 30px;
  width: 250px;
  height: 70px;
  background: #483f89;
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  color: #eeeeee;
  cursor: pointer;

  @media screen and (max-width: 780px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 555px) {
    width: 180px;
    height: 60px;
    font-size: 25px;
  }

  @media screen and (max-width: 350px) {
    width: 150px;
    height: 50px;
    font-size: 20px;
  }
`;

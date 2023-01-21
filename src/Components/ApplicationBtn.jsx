import React from "react";
import styled from "styled-components";

export default function ApplicationBtn() {
  const click = () => {
    window.location.href = "";
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
  font-family: "apple";
`;

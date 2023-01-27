import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/");
  };
  return (
    <Wrap>
      <Text>404 Notfound</Text>
      <Btn onClick={click}>돌아가기</Btn>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-weight: 800;
  font-size: 3rem;
  background: -webkit-linear-gradient(0deg, #a2396e 0%, #354b7a 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;

  @media screen and (max-width: 780px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 555px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
`;

const Btn = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 50px;
  background: #483f89;
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  color: #eeeeee;
  cursor: pointer;
`;

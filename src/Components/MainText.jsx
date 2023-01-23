import React from "react";
import styled from "styled-components";

export default function MainText() {
  return <Text>우리는 MC 입니다.</Text>;
}

const Text = styled.p`
  padding: 20px;
  font-weight: 800;
  font-size: 5rem;
  background: -webkit-linear-gradient(0deg, #a2396e 0%, #354b7a 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -5px;

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

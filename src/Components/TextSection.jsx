import React from "react";
import styled from "styled-components";

export default function TextSection() {
  //   let scroll = new IntersectionObserver((e) => {
  //     e.forEach((box) => {
  //       if (box.isIntersecting) {
  //       }
  //     });
  //   });

  return (
    <Wrap>
      <TextContainer>
        <Text>MC는 전공심화 동아리 입니다.</Text>
        <Text>MC는 함께하는 동아리 입니다.</Text>
        <Text>MC는 같이하는 동아리 입니다.</Text>
        <Text>MC는 가족같은 동아리 입니다.</Text>
      </TextContainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  margin-top: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  padding: 10px;
  font-weight: 1000;
  font-size: 80px;
  text-align: center;
  background: linear-gradient(90.9deg, #a2396e 0%, #354b7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -7px;
`;

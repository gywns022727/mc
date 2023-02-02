import React from "react";
import styled from "styled-components";

// https://velog.io/@dishate/%ED%99%94%EB%A9%B4%EC%97%90-%EB%93%A4%EC%96%B4%EC%99%94%EC%9D%84-%EB%95%8C-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%8F%99%EC%9E%91%ED%95%98%EA%B8%B0-react-IntersectionObserver

export default function TextSection() {
  return (
    <Wrap>
      <Container>
        <Text>MC는 전공심화 동아리 입니다.&#x2004;</Text>
        <Text>MC는 함께하는 동아리 입니다.&#x2004;</Text>
        <Text>MC는 같이하는 동아리 입니다.&#x2004;</Text>
        <Text>MC는 가족같은 동아리 입니다.&#x2004;</Text>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-weight: 1000;
  font-size: 4.3rem;
  text-align: center;
  opacity: 0;
  transition: 0.5s;
  background: linear-gradient(90.9deg, #a2396e 0%, #354b7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 1000px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.2rem;
  }
`;

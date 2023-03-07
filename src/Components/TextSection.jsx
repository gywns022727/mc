import React from "react";
import styled from "styled-components";
import { InView, useInView } from "react-intersection-observer";

export default function TextSection() {
  useInView();

  const Scroll = async () => {
    const test0 = document.getElementsByClassName("text")[0];
    const test1 = document.getElementsByClassName("text")[1];
    const test2 = document.getElementsByClassName("text")[2];
    const test3 = document.getElementsByClassName("text")[3];
    test0.style.opacity = 1;
    await new Promise((r) => setTimeout(r, 850));
    test1.style.opacity = 1;
    await new Promise((r) => setTimeout(r, 850));
    test2.style.opacity = 1;
    await new Promise((r) => setTimeout(r, 850));
    test3.style.opacity = 1;
  };

  return (
    <Wrap>
      <Container>
        <InView as="div" onChange={(inView) => (inView ? Scroll() : "")}>
          <Text className="text">MC는 전공심화 동아리 입니다.&#x2004;</Text>
          <Text className="text">MC는 자유로운 동아리 입니다.&#x2004;</Text>
          <Text className="text">MC는 자기개발 동아리 입니다.&#x2004;</Text>
          <Text className="text">MC는 가족같은 동아리 입니다.&#x2004;</Text>
        </InView>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
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
  font-weight: bold;
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

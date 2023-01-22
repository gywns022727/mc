import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function TextSection() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Wrap>
      <TextContainer>
        <Text style={{ opacity: (scroll - 700) / 10 }}>
          MC는 전공심화 동아리 입니다.&#x2004;
        </Text>
        <Text style={{ opacity: (scroll - 850) / 10 }}>
          MC는 함께하는 동아리 입니다.&#x2004;
        </Text>
        <Text style={{ opacity: (scroll - 1000) / 10 }}>
          MC는 같이하는 동아리 입니다.&#x2004;
        </Text>
        <Text style={{ opacity: (scroll - 1150) / 10 }}>
          MC는 가족같은 동아리 입니다.&#x2004;
        </Text>
      </TextContainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 10px;
  width: 100vw;
  height: 150vh;
  background: #000;
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

const Text = styled.p`
  font-weight: 1000;
  font-size: 80px;
  text-align: center;
  opacity: 0;
  transition: 0.5s;
  background: linear-gradient(90.9deg, #a2396e 0%, #354b7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

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

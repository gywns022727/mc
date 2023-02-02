import React from "react";
import styled from "styled-components";
import ApplicationBtn from "../Components/ApplicationBtn";
// import Bk1 from "../assets/images/bk1.png";
// import Bk2 from "../assets/images/bk2.png";
// import Bk3 from "../assets/images/bk3.png";

export default function MainSection() {
  return (
    <Wrap>
      <Container>
        <Fake />
        <ImgContainer></ImgContainer>
        <Content>
          <MainText>우리는 MC 입니다.</MainText>
          <SubText>저희와 함께 할래요?</SubText>
          <ApplicationBtn />
        </Content>
      </Container>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 100vw;
  height: 400px;
  position: fixed;
  z-index: -5;
  background-color: #667a8b;
  /* > ul {
    margin: 0 auto;
    width: 1000px;
    height: 400px;
    overflow: hidden;
    background-position: center;

    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 50vh;
    }
  } */

  @media screen and (max-width: 1050px) {
    width: 100vw;

    height: 50vh;
  }
`;

const Fake = styled.div`
  width: 1000px;
  height: 400px;
  @media screen and (max-width: 1000px) {
    width: 100vw;
    height: 50vh;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  animation-name: opacity;
  animation-duration: 3000ms;

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MainText = styled.p`
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

const SubText = styled.p`
  font-weight: 450;
  font-size: 3rem;
  color: #eee;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 555px) {
    font-size: 1.4rem;
  }
`;

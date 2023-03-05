import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Bk1 from "../assets/images/bk1.jpeg";

export default function MainSection() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/privacy");
  };
  return (
    <Container>
      <ImgContainer />
      <div>
        <img src={Bk1} alt="bkimg1" />
      </div>
      <Content>
        <MainText>우리는 MC 입니다.</MainText>
        <SubText>저희와 함께 할래요?</SubText>
        <Btn onClick={click}>입부 신청하기</Btn>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;

    > img {
      height: 506px;
      @media screen and (max-width: 1000px) {
        height: 50vh;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  width: 100vw;
  height: 500px;
  position: fixed;
  z-index: -5;
  display: flex;
  justify-content: center;
  background-image: url(${Bk1});
  background-size: cover;
  background-position: 0 60%;
  filter: blur(5px);

  @media screen and (max-width: 1000px) {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 720px) and (max-height: 515px) {
    width: 100vw;
    height: 50vh;
  }
`;

const Content = styled.div`
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

  @media screen and (max-width: 720px) and (max-height: 515px) {
    font-size: 2.5rem;
  }
`;

const SubText = styled.p`
  font-weight: 450;
  font-size: 3rem;
  color: #000;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 555px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 720px) and (max-height: 515px) {
    font-size: 1.8rem;
  }
`;

const Btn = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
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

  @media screen and (max-width: 720px) and (max-height: 515px) {
    width: 150px;
    height: 50px;
    font-size: 20px;
  }
`;

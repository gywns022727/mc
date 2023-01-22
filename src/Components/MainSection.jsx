import React from "react";
import styled from "styled-components";
import MainText from "../Components/MainText";
import ApplicationBtn from "../Components/ApplicationBtn";
import Bk1 from "../assets/images/bk1.png";
import Bk2 from "../assets/images/bk2.png";
import Bk3 from "../assets/images/bk3.png";

export default function MainSection() {
  return (
    <Wrap>
      <Fake />
      <ImgContainer>
        <ul>
          <li>
            <img src={Bk1} alt="bk1" />
          </li>
          <li>
            <img src={Bk2} alt="bk1" />
          </li>
          <li>
            <img src={Bk3} alt="bk1" />
          </li>
        </ul>
      </ImgContainer>
      <Content>
        <MainText />
        <SubText>저희와 함께 할래요?</SubText>
        <ApplicationBtn />
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 1000px;
  height: 400px;
  /* background-color: #0c1d17; */
  position: fixed;
  z-index: -5;
  > ul,
  li {
    list-style: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 400px;
  }
`;

const Fake = styled.div`
  width: 1200px;
  height: 400px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 400px;
  }
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const SubText = styled.p`
  font-weight: 450;
  font-size: 32px;
  color: #eee;
  text-align: center;
`;

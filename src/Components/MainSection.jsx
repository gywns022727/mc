import React from "react";
import styled from "styled-components";
import MainText from "../Components/MainText";
import ApplicationBtn from "../Components/ApplicationBtn";

export default function MainSection() {
  return (
    <Wrap>
      <ImgContainer>
        <img src="" alt="" />
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
  background-color: #110808;
`;

const ImgContainer = styled.div`
  width: 1200px;
  height: 400px;
  background-color: #0c1d17;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText = styled.p`
  font-weight: 450;
  font-size: 32px;
  color: #eee;
  text-align: center;
`;

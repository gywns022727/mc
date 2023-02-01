import React from "react";
import styled from "styled-components";

export default function ImageSection() {
  return (
    <Wrap>
      <Container>
        <Img1></Img1>
        <ImgBox>
          <Img2></Img2>
          <Img3></Img3>
        </ImgBox>
      </Container>
    </Wrap>
  );
}

const Img1 = styled.div`
  width: 900px;
  height: 350px;
  background-color: #eeeeee;

  @media screen and (max-width: 1000px) {
    width: calc(100% - 100px);
    height: 250px;
  }

  @media screen and (max-width: 400px) {
    width: calc(100% - 50px);
  }
`;

const Img2 = styled.div`
  width: 430px;
  height: 350px;
  background-color: #eeeeee;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 250px;
  }
`;

const Img3 = styled.div`
  width: 430px;
  height: 350px;
  background-color: #eeeeee;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  /* 
  @media screen and (max-width: 400px) {
    width: calc(100% - 50px);
    height: 250px;
  } */
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

const ImgBox = styled.div`
  margin-top: 25px;
  width: 900px;
  height: 350px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: calc(100% - 100px);
    height: 250px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 400px) {
    width: calc(100% - 50px);
  }
`;

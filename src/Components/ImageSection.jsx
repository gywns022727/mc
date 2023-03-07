import React from "react";
import styled from "styled-components";
import { InView, useInView } from "react-intersection-observer";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";
import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.jpeg";

export default function ImageSection() {
  useInView();

  const Scroll = async () => {
    const img = document.getElementsByClassName("img")[0];
    img.style.opacity = 1;
  };

  return (
    <Wrap>
      <Container>
        <ImgBox>
          <Text>
            MC<span></span>
          </Text>
          <InView as="div" onChange={(inView) => (inView ? Scroll() : "")}>
            <div className="img">
              <div>
                <Img src={img1} alt="img1"></Img>
                <Img className="center" src={img2} alt="img2"></Img>
                <Img src={img3} alt="img3"></Img>
              </div>
              <div>
                <Img src={img4} alt="img4"></Img>
                <Img className="center" src={img5} alt="img5"></Img>
                <Img src={img6} alt="img6"></Img>
              </div>
              <div>
                <Img src={img7} alt="img7"></Img>
                <Img className="center" src={img8} alt="img8"></Img>
                <Img src={img9} alt="img9"></Img>
              </div>
            </div>
          </InView>
        </ImgBox>
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

const ImgBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
    > .img {
      transition: 2s;
      opacity: 0;
      > div {
        margin: 10px 0;
        display: flex;
        > .center {
          margin: 0 20px;
          @media screen and (max-width: 300px) {
            margin: 0 10px;
          }
        }
      }
    }
  }
`;

const Text = styled.h2`
  padding-bottom: 10px;
  font-size: 3rem;
  background: -webkit-linear-gradient(0deg, #a2396e 10%, #354b7a 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 5px);
    height: 1px;
    background-color: #ebebeb;
    @media screen and (max-width: 300px) {
      width: calc(100% - 62px);
    }
  }

  @media screen and (max-width: 300px) {
    font-size: 2.5rem;
  }

  > span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80px;
    height: 1px;
    background-color: #a2396e;
    z-index: 10;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;

  @media screen and (max-width: 750px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 550px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 450px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 360px) {
    width: 80px;
    height: 80px;
  }
`;

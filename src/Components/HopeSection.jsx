import React from "react";
import styled from "styled-components";
import { InView, useInView } from "react-intersection-observer";

export default function HopeSection() {
  useInView();

  const Scroll = async () => {
    const box0 = document.getElementsByClassName("box")[0];
    const box1 = document.getElementsByClassName("box")[1];
    const box2 = document.getElementsByClassName("box")[2];
    box0.style.opacity = 1;
    box1.style.opacity = 1;
    box2.style.opacity = 1;
  };

  return (
    <Wrap>
      <Container>
        <Content>
          <TextBox>
            <Text>이런 친구가 왔으면 좋겠어요!&#x2004;&#x2004;</Text>
          </TextBox>
          <InView as="div" onChange={(inView) => (inView ? Scroll() : "")}>
            <ContentBox>
              <Box>
                <div className="box">
                  <h3>끈기있는 사람</h3>
                  <p>프로그래밍은 언제나 문제를 붙잡고 있어야해요.</p>
                </div>
              </Box>
              <Box>
                <div className="box">
                  <h3>끈기있는 사람</h3>
                  <p>프로그래밍은 언제나 문제를 붙잡고 있어야해요.</p>
                </div>
              </Box>
              <Box>
                <div className="box">
                  <h3>끈기있는 사람</h3>
                  <p>프로그래밍은 언제나 문제를 붙잡고 있어야해요.</p>
                </div>
              </Box>
            </ContentBox>
          </InView>
        </Content>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  padding-left: 10px;
  width: 100%;
`;

const Text = styled.p`
  padding-bottom: 20px;
  font-weight: 800;
  font-size: 3rem;
  background: -webkit-linear-gradient(0deg, #a2396e 0%, #354b7a 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -3px;

  @media screen and (max-width: 780px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 555px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 1.3rem;
  }
`;

const Box = styled.div`
  padding: 30px;
  margin: 0 10px 0 10px;
  width: 300px;
  height: 200px;
  background-color: #eee;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: 2s;
    opacity: 0;
  }

  > div > h3 {
    opacity: 1;
    font-size: 35px;
    @media screen and (max-width: 300px) {
      font-size: 30px;
    }
  }

  > div > p {
    opacity: 1;
    font-size: 17px;
    letter-spacing: -2px;

    @media screen and (max-width: 300px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1050px) {
    width: 400px;
    height: 200px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 780px) {
    width: 350px;
    height: 200px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 555px) {
    width: 320px;
    height: 180px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 380px) {
    width: 300px;
    height: 160px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 300px) {
    width: 260px;
    height: 120px;
    margin-bottom: 10px;
  }
`;

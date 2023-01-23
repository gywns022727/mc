import React from "react";
import styled from "styled-components";

export default function HopeSection() {
  return (
    <Wrap>
      <Container>
        <Text>이런 친구가 왔으면 좋겠어요!</Text>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #5f865f;
`;

const Container = styled.div``;

const Text = styled.p`
  /* padding: 20px; */
  font-weight: 800;
  font-size: 5rem;
  background: -webkit-linear-gradient(0deg, #a2396e 0%, #354b7a 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Box = styled.div``;

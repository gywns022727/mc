import React from "react";
import styled from "styled-components";
import MainSection from "../Components/MainSection";

export default function index() {
  return (
    <Wrap>
      <MainSection />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </Wrap>
  );
}

const Wrap = styled.div``;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
`;

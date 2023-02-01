import React from "react";
import styled from "styled-components";
import MainSection from "../Components/MainSection";
import TextSection from "../Components/TextSection";
import ImageSection from "../Components/ImageSection";
import HopeSection from "../Components/HopeSection";

export default function index() {
  return (
    <Wrap>
      <MainSection />
      <TextSection />
      <ImageSection />
      <HopeSection />
    </Wrap>
  );
}

const Wrap = styled.div``;

// const Section = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: #000;
// `;

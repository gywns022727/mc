import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Form from "../Components/Form";

export default function index() {
  return (
    <Wrap>
      <div>
        <Header />
        <Form />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  @media screen and (max-height: 500px) {
    height: 100%;
  }
`;

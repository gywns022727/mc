import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrap>
      <Text>입부 신청</Text>
    </Wrap>
  );
}

const Wrap = styled.div`
  text-align: center;
`;

const Text = styled.span`
  font-weight: 800;
  font-size: 3rem;
  background: -webkit-linear-gradient(0deg, #a2396e 0%, #354b7a 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -5px;
`;

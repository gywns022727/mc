import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const [error, isError] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const click = useCallback(() => {
    if (ref.current.checked) {
      navigate("/form");
    } else {
      isError(true);
    }
  }, [navigate]);
  return (
    <Wrap>
      <Container>
        <HeadLine>개인정보 수집 동의 안내</HeadLine>
        <Text>
          본동아리는 입부 신청과 관련하여 아래와 같이 개인정보를 수집 및 제
          3자에게 제공하고자 합니다. 내용을 자세히 읽으신후, 동의 여부를
          선택해주세요.
        </Text>
        <table>
          <thead>
            <tr>
              <th>수집 항목</th>
              <th>이용 목적</th>
              <th>보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>이름, 학번, 전화번호</td>
              <td>입부 신청</td>
              <td>1년</td>
            </tr>
          </tbody>
        </table>
        <Text>
          귀하께서는 개인정보 수집에 동의하지 않을 권리가 있습니다. 하지만,
          동의하지 않을 경우, 입부 신청이 어려움을 알려드립니다.
        </Text>
        <Text>동의하신 자료는 목적 이외의 용도로는 사용되지 않습니다.</Text>
        <CheckBox>
          <input type="checkbox" ref={ref} />
          <p>개인정보 수집 동의</p>
        </CheckBox>
        {error ? <Error>필수 항목입니다.</Error> : <Error></Error>}
        <Btn onClick={click}>다음</Btn>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  @media screen and (max-height: 500px) {
    height: 100%;
  }
`;

const Container = styled.div`
  padding: 10px 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }

  > table {
    margin: 10px 0;
    text-align: center;
    border: 1px solid #ffffff;
    > thead {
      > tr {
        > th {
          width: 150px;
          height: 30px;
        }
      }
    }
    > tbody {
      height: 50px;
    }
  }
`;

const HeadLine = styled.p`
  font-weight: 600;
  font-size: 25px;
  background: -webkit-linear-gradient(0deg, #a2396e 0%, #354b7a 100%);
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media screen and (max-width: 300px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  padding: 15px 0;
  font-size: 16px;
  @media screen and (max-width: 300px) {
    font-size: 14px;
  }
`;

const CheckBox = styled.label`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > input {
    width: 17px;
    height: 17px;
  }
`;

const Error = styled.p`
  padding: 5px;
  color: #e42c2c;
  letter-spacing: -1px;
`;

const Btn = styled.button`
  margin-top: 15px;
  width: 150px;
  height: 50px;
  background: #483f89;
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: #eeeeee;
  cursor: pointer;
`;

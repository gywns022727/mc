import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const notify = () => toast.success("신청이 완료되었습니다.");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  // const navigate = useNavigate();
  // const handleLinkOnClick = (status) => navigate("/", { state: status });

  const handleNumber = (e) => {
    const { value } = e.target;
    setPhone(value);
  };

  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (phone.length === 11) {
      setPhone(phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    } else if (phone.length === 13) {
      setPhone(
        phone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phone]);

  const onSubmit = async (data) => {
    notify();
    console.log(data);
    // await new Promise((r) => setTimeout(r, 2000));
    // handleLinkOnClick(true);
  };

  return (
    <Wrap>
      <form
        // action="https://192b-2001-2d8-e2b1-c8a7-f034-b48e-fe54-c46c.jp.ngrok.io/signup"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <Text>이름</Text>
          <Input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="이름을 입력해주세요."
            maxLength={6}
            {...register("name", {
              required: true,
              minLength: 2,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <Error>이름을 입력해주세요.</Error>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <Error>이름을 올바르지 않습니다</Error>
          )}
        </label>
        <label>
          <Text>학번</Text>
          <Input
            type="text"
            name="number"
            autoComplete="off"
            placeholder="학번을 입력해주세여.(ex. 10301)"
            maxLength={5}
            {...register("number", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.number && errors.number.type === "required" && (
            <Error>학번을 입력해주세요.</Error>
          )}
          {errors.number && errors.number.type === "minLength" && (
            <Error>학번이 올바르지 않습니다.</Error>
          )}
        </label>
        <label>
          <Text>전화번호</Text>
          <Input
            type="text"
            name="phone"
            autoComplete="off"
            placeholder="전화번호를 입력해주세요.(숫자만)"
            value={phone || ""}
            minLength={13}
            maxLength={13}
            {...register("phone", {
              required: true,
              onChange: (e) => {
                handleNumber(e);
              },
            })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <Error>전화번호를 입력해주세요.</Error>
          )}
        </label>
        <label>
          <CheckBox>
            <Check
              type="checkbox"
              name="check"
              {...register("checkbox", {
                required: true,
              })}
            />
            <CheckText>개인정보 수집 동의</CheckText>
          </CheckBox>
          <Error>
            {errors.checkbox?.type === "required" &&
              "개인정보 수집에 동의 하십니까?"}
          </Error>
        </label>
        <Submit type="submit" value="신청 하기" disabled={isSubmitting} />
        <ToastContainer
          position="top-center"
          autoClose={800}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </form>
      <p>확인 후 연락드릴 예정입니다.</p>
    </Wrap>
  );
}

const Wrap = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > p {
    padding-bottom: 5px;
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #9d9d9d;
    letter-spacing: -2px;
  }
`;

const Text = styled.p`
  padding: 10px 0;
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: -1px;
`;

const Input = styled.input`
  padding: 10px;
  width: 280px;
  height: 50px;
  font-size: 15px;
  color: #000;
  background: #ffffff;
  border: 1px solid #6c6c6c;
  border-radius: 10px;
  letter-spacing: 0px;
  :focus {
    outline: none;
  }

  @media screen and (max-width: 290px) {
    width: 260px;
  }
`;

const CheckBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Check = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  :focus {
    outline: none;
    border: none;
  }
`;

const CheckText = styled.span`
  color: #fff;
  letter-spacing: -2px;
`;

const Submit = styled.input`
  margin: 15px 0;
  width: 200px;
  height: 50px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  background: #483f89;
  border-radius: 30px;
  border: none;
  letter-spacing: -2px;
`;

const Error = styled.p`
  padding: 5px;
  color: #e42c2c;
  letter-spacing: -1px;
`;

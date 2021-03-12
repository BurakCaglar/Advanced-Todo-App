import React from "react";
import styled from "styled-components";
import Login from "../components/login/Login";

const LoginPage = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

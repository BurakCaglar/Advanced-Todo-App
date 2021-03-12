import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ProfilePhoto from "../assets/user.svg";
import TodoCardList from "../components/card/TodoCardList";
import Sidebar from "../components/sidebar/Sidebar";

const HomePage = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  let history = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      const { name, surname } = JSON.parse(localStorage.getItem("user"));
      setData({ ...data, name: name, surname: surname });
    } else {
      alert(
        "Please enter your name & surname. You will be redirecting to the login page."
      );
      setTimeout(() => {
        history.push("/");
      }, 250);
    }
  }, []);

  return (
    <Wrapper className="container container-center">
      <Sidebar ProfilePhoto={ProfilePhoto} data={data} />
      <div className="todo-card-list">
        <TodoCardList />
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.main`
  display: flex;
`;

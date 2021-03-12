import React from "react";
import styled from "styled-components";
import { User } from "..";
import CategoryList from "../CategoryList";
import { useTodosContext } from "../../context/context";
import Button from "@material-ui/core/Button";

const Sidebar = ({ ProfilePhoto, data }) => {
  const { state } = useTodosContext();

  const saveAllToLocalStorage = () => {
    localStorage.setItem("state", JSON.stringify(state));
  };

  return (
    <Wrapper>
      <User ProfilePhoto={ProfilePhoto} data={data} />
      <div className="category-list">
        <CategoryList />
      </div>
      <div className="local-storage">
        <Button
          style={{
            color: "#140152",
            border: "1px solid",
            borderColor: "#140152",
          }}
          onClick={saveAllToLocalStorage}
        >
          Save All
        </Button>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 200px;
  align-items: center;
  background-color: #ffffff;

  .category-list {
    position: fixed;
    margin-top: 1rem;
    left: 0;
    transform: translateX(25%);
  }

  .local-storage {
    position: fixed;
    bottom: 0;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }
`;

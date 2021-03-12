import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ todoCard }) => {
  return (
    <Wrapper>
      {todoCard.todoList &&
        todoCard.todoList.map((todoItem) => {
          return (
            <div key={todoItem.id} style={{ marginRight: "1rem" }}>
              <Todo
                todoItem={todoItem}
                todoCard={todoCard}
                todoList={todoCard.todoList}
              />
            </div>
          );
        })}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div``;

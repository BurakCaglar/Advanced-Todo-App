import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ClearIcon from "@material-ui/icons/Clear";
import { useTodosContext } from "../../context/context";

const Todo = ({ todoItem, todoList, todoCard }) => {
  const { state, dispatch } = useTodosContext();
  const { id, todo } = todoItem;

  const removeTodoItem = (id, cardId) => {
    const selectedTodoCardIndex = state.todoCards.findIndex(
      (todoCard) => todoCard.id === cardId
    );
    const selectedTodoCardItem = todoList.find(
      (todoItem) => todoItem.id === id
    );

    dispatch({
      type: "REMOVE_TODO_ITEM",
      payload: {
        id,
        todoCard,
        todoList,
        selectedTodoCardIndex,
        selectedTodoCardItem,
      },
    });
  };

  return (
    <Wrapper>
      <div className="wrapper">
        <Checkbox
          style={{ color: "white" }}
          defaultChecked={false}
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <Typography variant="subtitle2">{todo}</Typography>
      </div>
      {todoCard.completed ? null : (
        <ClearIcon onClick={() => removeTodoItem(id, todoCard.id)} />
      )}
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
`;

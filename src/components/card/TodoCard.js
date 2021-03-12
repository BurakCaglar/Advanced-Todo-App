import React, { useState } from "react";
import styled from "styled-components";
import { useTodosContext } from "../../context/context";
import TodoList from "./TodoList";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import UpdateIcon from "@material-ui/icons/Update";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CloseIcon from "@material-ui/icons/Close";
const TodoCard = ({ todoCard }) => {
  const { state, dispatch, deleteCard } = useTodosContext();

  const { id } = todoCard;
  const [values, setValues] = useState({
    title: "",
    category: "",
    todo: "",
  });

  const onChangeValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const { title, category, todo } = values;

  const handleSubmit = (e, id) => {
    e.preventDefault();

    const selectedIndex = state.todoCards.findIndex(
      (todoCard) => todoCard.id === id
    );
    const selectedTodoCard = state.todoCards.find(
      (todoCard) => todoCard.id === id
    );

    if (e.target.name === "title") {
      if (title !== "") {
        dispatch({
          type: "SET_CARD_TITLE",
          payload: { id, title, selectedIndex, selectedTodoCard },
        });

        setValues({
          ...values,
          title: "",
        });
      }
    }

    if (e.target.name === "category") {
      if (category !== "") {
        dispatch({
          type: "SET_CARD_CATEGORY",
          payload: { id, category, selectedIndex, selectedTodoCard },
        });
        setValues({
          ...values,
          category: "",
        });
      }
    }

    if (e.target.name === "todo") {
      if (todo !== "") {
        dispatch({
          type: "ADD_TODO_ITEM",
          payload: { id, todo, selectedIndex, selectedTodoCard },
        });
        setValues({
          ...values,
          todo: "",
        });
      }
    }
  };

  const addTitle = (id) => {
    if (title.trim() !== "") {
      const selectedIndex = state.todoCards.findIndex(
        (todoCard) => todoCard.id === id
      );
      const selectedTodoCard = state.todoCards.find(
        (todoCard) => todoCard.id === id
      );

      dispatch({
        type: "SET_CARD_TITLE",
        payload: { id, title, selectedIndex, selectedTodoCard },
      });

      setValues({
        ...values,
        title: "",
      });
    }
  };

  const addCategory = (id) => {
    if (category.trim() !== "") {
      const selectedIndex = state.todoCards.findIndex(
        (todoCard) => todoCard.id === id
      );
      const selectedTodoCard = state.todoCards.find(
        (todoCard) => todoCard.id === id
      );
      dispatch({
        type: "SET_CARD_CATEGORY",
        payload: { id, category, selectedIndex, selectedTodoCard },
      });
      setValues({
        ...values,
        category: "",
      });
    }
  };

  const addTodo = (e, id) => {
    if (todo.trim() !== "") {
      const selectedIndex = state.todoCards.findIndex(
        (todoCard) => todoCard.id === id
      );
      const selectedTodoCard = state.todoCards.find(
        (todoCard) => todoCard.id === id
      );
      dispatch({
        type: "ADD_TODO_ITEM",
        payload: { id, todo, selectedIndex, selectedTodoCard },
      });
      setValues({
        ...values,
        todo: "",
      });
    }
  };

  /* SET SAVE */

  const setSaveAll = (id) => {
    const isCompleted = !todoCard.completed;
    const selectedIndex = state.todoCards.findIndex(
      (todoCard) => todoCard.id === id
    );
    const selectedTodoCard = state.todoCards.find(
      (todoCard) => todoCard.id === id
    );
    dispatch({
      type: "SET_SAVE_ALL",
      payload: { id, isCompleted, selectedIndex, selectedTodoCard },
    });
  };

  const classes = useStyles();

  return (
    <Wrapper>
      <Card
        style={{ position: "relative", margin: "1rem", display: "table" }}
        className={classes.root}
        variant="outlined"
      >
        {todoCard.completed ? (
          <>
            <div className="overlay">
              <div className="icons">
                <UpdateIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setSaveAll(id)}
                />
                <HighlightOffIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteCard(id)}
                />
              </div>
            </div>
          </>
        ) : null}

        <CardContent>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            name="title"
            onSubmit={(e) => handleSubmit(e, id)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                style={{ marginLeft: "auto", marginRight: "auto" }}
                variant="h6"
                gutterBottom
              >
                {todoCard.title || "Project Name"}
              </Typography>

              {todoCard.completed ? null : (
                <CloseIcon
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    backgroundColor: "red",
                  }}
                  onClick={() => deleteCard(id)}
                />
              )}
            </div>
            {todoCard.completed || (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Input
                  classes={{
                    input: classes.input,
                  }}
                  name="title"
                  placeholder={`${
                    todoCard.title !== ""
                      ? "Change the project name"
                      : "Enter the project name"
                  }`}
                  value={title || ""}
                  onChange={(e) => onChangeValues(e)}
                />
                <AddIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => addTitle(id)}
                />
              </div>
            )}
          </form>
          {todoCard.completed || (
            <div className="category">
              <form name="category" onSubmit={(e) => handleSubmit(e, id)}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Input
                    classes={{
                      input: classes.input,
                    }}
                    type="text"
                    name="category"
                    placeholder={`${
                      todoCard.category.length > 0
                        ? "Change the category"
                        : "Enter the category"
                    }`}
                    value={category || ""}
                    onChange={(e) => onChangeValues(e)}
                  />
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => addCategory(id)}
                  />
                </div>
              </form>
            </div>
          )}

          <div className="todo-list">
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              name="todo"
              value={todo}
              onSubmit={(e) => handleSubmit(e, id)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {todoCard.completed || (
                  <>
                    <Input
                      classes={{
                        input: classes.input,
                      }}
                      type="text"
                      name="todo"
                      placeholder="Enter the todo "
                      value={todo || ""}
                      onChange={(e) => onChangeValues(e)}
                    />
                    <AddCircleOutlineIcon
                      style={{ cursor: "pointer" }}
                      onClick={(e) => addTodo(e, id)}
                    />
                  </>
                )}
              </div>
            </form>

            <TodoList id={id} todoCard={todoCard} />
          </div>
          {todoCard.completed ? (
            <Typography
              style={{
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              variant="subtitle1"
              gutterBottom
            >
              {todoCard.category}
            </Typography>
          ) : (
            <Button
              style={{
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                borderColor: "white",
              }}
              variant="outlined"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => setSaveAll(id)}
            >
              Kaydet
            </Button>
          )}
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default TodoCard;

const Wrapper = styled.div`
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 0.7s all ease-in-out;
    &:hover {
      background-color: #bdb2ff;
      opacity: 0.3;
      position: absolute;
      .icons {
        display: block;
      }
    }
  }
  .icons {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    transition: 0.5s all ease-in-out;

    svg {
      &:nth-child(1) {
        color: green;
      }
      &:nth-child(2) {
        color: red;
      }
      opacity: 1;
      z-index: 5;
      font-size: 2rem;
      transition: 0.6s all ease-in-out;
      &:hover {
        font-size: 3rem;
        &:nth-child(1) {
          color: green;
        }
        &:nth-child(2) {
          color: red;
        }
      }
    }
  }
`;

const useStyles = makeStyles({
  root: {
    minWidth: 230,

    backgroundColor: "#4527a0",
    color: "white",
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  TextField: {
    color: "white",
  },
  input: {
    color: "white",
    "&::placeholder": {
      color: "white",
    },
  },
  "& label.Mui-focused": {
    color: "green",
  },
});

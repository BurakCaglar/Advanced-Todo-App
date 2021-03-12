import React from "react";
import styled from "styled-components";
import CreateTodoCard from "./CreateTodoCard";
import TodoCard from "./TodoCard";
import { useTodosContext } from "../../context/context";

const TodoCardList = () => {
  const { state, categoryfilter } = useTodosContext();

  return (
    <Wrapper>
      {categoryfilter.length > 0
        ? state.todoCards
            .filter((todoCard) =>
              state.filteredCategories.some((r) =>
                todoCard.category.includes(r)
              )
            )
            .map((todoCard) => (
              <TodoCard key={todoCard.id} todoCard={todoCard} />
            ))
        : state.todoCards.map((todoCard) => {
            return <TodoCard key={todoCard.id} todoCard={todoCard} />;
          })}
      <CreateTodoCard />
    </Wrapper>
  );
};

export default TodoCardList;

const Wrapper = styled.section`
  margin-left: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

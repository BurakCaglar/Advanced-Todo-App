import React, { useContext, useReducer, useState } from "react";
import todosReducer from "../reducer/reducer";

const TodosContext = React.createContext();

const titleData = {
  id: "",
  title: "",
};

const initialState = {
  todoCards: [],
  filteredCategories: [],
};

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    todosReducer,
    JSON.parse(localStorage.getItem("state")) || initialState
  );

  /***********  FUNCTIONS **************/

  /* CREATE TODO CARD */
  const handleCreateCard = () => {
    dispatch({ type: "CREATE_TODO_CARD" });
  };

  /* DELETE TODO CARD */

  const deleteCard = (id) => {
    dispatch({ type: "DELETE_TODO_CARD", payload: id });
  };

  /* FILTER GENRE */

  const [categoryfilter, setCategoryFilter] = useState([]);
  state.filteredCategories = [...categoryfilter];

  const changeFilter = (e) => {
    if (e.target.checked) {
      setCategoryFilter([...categoryfilter, e.target.value]);
    } else {
      setCategoryFilter(categoryfilter.filter((id) => id !== e.target.value));
    }

    dispatch({
      type: "CHANGE_FILTER",
      payload: { categoryfilter },
    });
  };

  return (
    <TodosContext.Provider
      value={{
        state,
        dispatch,
        handleCreateCard,
        deleteCard,
        titleData,
        changeFilter,
        categoryfilter,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => {
  return useContext(TodosContext);
};

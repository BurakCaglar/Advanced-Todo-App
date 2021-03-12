import { v4 as uuidv4 } from "uuid";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_TODO_CARD":
      const newTodoCard = {
        id: uuidv4(),
        title: "",
        category: [],
        todoList: [],
        completed: false,
      };

      return { ...state, todoCards: [...state.todoCards, newTodoCard] };

    case "DELETE_TODO_CARD":
      const deletedTodoCards = state.todoCards.filter(
        (card) => card.id !== action.payload
      );
      return { ...state, todoCards: deletedTodoCards };

    case "CREATE_TODO_ITEM":
      return {
        ...state,
        todoCards: { ...state.todoCards },
      };
    case "SET_CARD_TITLE":
      const tempTodoCard = {
        ...action.payload.selectedTodoCard,
        title: action.payload.title,
      };
      const tempTodoCards = [
        ...state.todoCards.slice(0, action.payload.selectedIndex),
        tempTodoCard,
        ...state.todoCards.slice(action.payload.selectedIndex + 1),
      ];

      return { ...state, todoCards: tempTodoCards };

    case "SET_CARD_CATEGORY":
      const neWcategory = action.payload.category;
      const newCategoryData = ["all", neWcategory];

      const tempCategoryCard = {
        ...action.payload.selectedTodoCard,
        category: newCategoryData,
      };

      const tempCategoryCards = [
        ...state.todoCards.slice(0, action.payload.selectedIndex),
        tempCategoryCard,
        ...state.todoCards.slice(action.payload.selectedIndex + 1),
      ];

      return { ...state, todoCards: tempCategoryCards };

    case "ADD_TODO_ITEM":
      const newTodoItem = {
        id: uuidv4(),
        todo: action.payload.todo,
      };

      const tempTodoItemCard = {
        ...action.payload.selectedTodoCard,
        todoList: [...action.payload.selectedTodoCard.todoList, newTodoItem],
      };

      const tempTodoItemCards = [
        ...state.todoCards.slice(0, action.payload.selectedIndex),
        tempTodoItemCard,
        ...state.todoCards.slice(action.payload.selectedIndex + 1),
      ];

      return {
        ...state,
        todoCards: tempTodoItemCards,
      };

    case "REMOVE_TODO_ITEM":
      const newTodoList = action.payload.todoList.filter((todo) => {
        return todo.id !== action.payload.id;
      });

      const tempDeletedTodoItemCard = {
        ...action.payload.todoCard,
        todoList: newTodoList,
      };

      const todoItemCardAfterDeleted = [
        ...state.todoCards.slice(0, action.payload.selectedTodoCardIndex),
        tempDeletedTodoItemCard,
        ...state.todoCards.slice(action.payload.selectedTodoCardIndex + 1),
      ];

      return { ...state, todoCards: todoItemCardAfterDeleted };
    case "SET_SAVE_ALL":
      const tempSaveCard = {
        ...action.payload.selectedTodoCard,
        completed: action.payload.isCompleted,
      };
      const tempSavedCards = [
        ...state.todoCards.slice(0, action.payload.selectedIndex),
        tempSaveCard,
        ...state.todoCards.slice(action.payload.selectedIndex + 1),
      ];
      return { ...state, todoCards: tempSavedCards };

    default:
      return { ...state };
  }
};

export default todosReducer;

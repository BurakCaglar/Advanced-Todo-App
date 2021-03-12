import React from "react";
import Category from "./Category";
import { useTodosContext } from "../context/context";

const CategoryList = () => {
  const { state } = useTodosContext();
  const { todoCards } = state;

  const nonRepeatingValues = (values, type) => {
    let nonRepeatingValues = values.map((item) => item[type]);
    return [...new Set(nonRepeatingValues)];
  };

  const nonRepeatingCategories = nonRepeatingValues(todoCards, "category");
  const newTempCategories = [...nonRepeatingCategories];

  const categories = newTempCategories.filter((item) => {
    return item;
  });

  var merged = [].concat.apply([], categories);
  const newCategories = [...new Set(merged)];

  return <Category categories={newCategories} />;
};

export default CategoryList;

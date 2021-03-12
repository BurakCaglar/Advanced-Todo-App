import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { useTodosContext } from "../context/context";
import styled from "styled-components";

const Category = ({ categories }) => {
  const { changeFilter } = useTodosContext();

  return (
    <>
      {categories.length > 0 && "Categories:"}
      {categories.map((category, index) => {
        return (
          <Wrapper key={index}>
            <form>
              <div className="form-input">
                <Checkbox
                  defaultChecked={false}
                  style={{ color: "#4527a0" }}
                  inputProps={{ "aria-label": "checkbox with default color" }}
                  value={category}
                  onClick={(e) => changeFilter(e)}
                />
                <Typography variant="subtitle1">{category}</Typography>
              </div>
            </form>
          </Wrapper>
        );
      })}
    </>
  );
};

export default Category;

const Wrapper = styled.div`
  .form-input {
    display: flex;
    align-items: center;
  }
`;

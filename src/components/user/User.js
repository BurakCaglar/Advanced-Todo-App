import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const User = ({ ProfilePhoto, data }) => {
  const { name, surname } = data;
  return (
    <Wrapper>
      <div className="image-wrapper">
        <img src={ProfilePhoto} alt="ProfilePhoto" />
      </div>
      <Typography>{`${name} ${surname}`}</Typography>
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1em;
  .image-wrapper {
    width: 50px;
    height: 50px;
    img {
      height: 100%;
      color: red;
    }
  }
`;

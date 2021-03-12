import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const initialUser = {
  name: "",
  surname: "",
};

const Login = () => {
  const [user, setUser] = useState(initialUser);

  const { name, surname } = user;

  /* FUNCTIONS */

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const setLocalStorage = () => {
    if (user.name && user.surname) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <Wrapper>
      <Card>
        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </form>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="text"
              name="surname"
              value={surname}
              placeholder="Surname"
              onChange={handleChange}
              required
            />
          </form>
          {(user.name && user.surname) ||
          JSON.parse(localStorage.getItem("user")) ? (
            <>
              <Link to="/todo">
                <Button
                  style={{
                    left: "0",
                    transform: "translateX(40%)",
                    marginTop: "1rem",
                    color: "#140152",
                    borderColor: "#140152",
                  }}
                  variant="outlined"
                  size="small"
                  onClick={setLocalStorage}
                >
                  Submit & GO
                </Button>
              </Link>
            </>
          ) : (
            ""
          )}
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
`;

import React from "react";
import styled from "styled-components";
import { useTodosContext } from "../../context/context";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const CreateTodoCard = () => {
  const { handleCreateCard } = useTodosContext();

  const classes = useStyles();
  return (
    <Wrapper>
      <Card
        style={{ position: "relative", margin: "1rem" }}
        className={classes.root}
        variant="outlined"
      >
        <CardContent>
          <Typography style={{ textAlign: "center" }} variant="h4" gutterBottom>
            New Project
          </Typography>
        </CardContent>

        <Button
          style={{
            position: "absolute",
            bottom: "5px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          variant="contained"
          color="primary"
          onClick={handleCreateCard}
        >
          CREATE
        </Button>
      </Card>
    </Wrapper>
  );
};

export default CreateTodoCard;

const Wrapper = styled.div`
  .header {
    text-align: center;
  }
`;

const useStyles = makeStyles({
  root: {
    minWidth: 264,
    minHeight: 210,
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
});

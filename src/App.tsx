import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <Container>
      <Typography textAlign='center' variant='h3' mt={3} mb={5}>
        Getir ToDo
      </Typography>
      <AddTodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
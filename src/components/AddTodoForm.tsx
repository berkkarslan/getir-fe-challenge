import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addNewTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

export const AddTodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()<AppDispatch>;
  const submitTodo = async (text: string) => {
    const todo = {
      title: text.toString(),
      completed: false,
      id: 0,
    };
    await dispatch(addNewTodo(todo));
    setText("");
  };

  return (
    <Box
      borderRadius={1}
      width='100%'
      sx={{ boxShadow: 2, p: 3 }}
      mb={3}
      alignItems={"center"}
      display='flex'
      justifyContent='space-between'
    >
      <TextField
        id='outlined-basic'
        label='Text'
        style={{ width: "85%" }}
        variant='outlined'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        variant='contained'
        data-testid="my-button"
        type='submit'
        onClick={() => submitTodo(text)}
      >
        Add
      </Button>
    </Box>
  );
};

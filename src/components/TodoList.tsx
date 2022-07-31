import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from '@mui/material/CircularProgress';
import { TodoListItem } from "./TodoListItem";
import { selectAllTodos, fetchTodos } from '../features/todoSlice'
import { useSelector, useDispatch } from 'react-redux'

export const TodoList: React.FC = () => {
  const [sort, setSort] = useState("Sort");
  const dispatch = useDispatch()<AppDispatch>;
  const todos: Todo[] = useSelector(selectAllTodos)
  const todoStatus = useSelector((state:RootState) => state.todos.status)
  const error = useSelector((state:RootState) => state.todos.error)

  useEffect(() => {
    if (todoStatus === 'idle') {
      dispatch(fetchTodos())
    }
  }, [todoStatus, dispatch])

  let content

  if (todoStatus === 'loading') {
     content = <CircularProgress />
  } else if (todoStatus === 'succeeded') {
      let orderedTodos: Todo[] = [...todos];
      if (sort !== "Sort") {
        orderedTodos =  todos.slice().sort((a, b) =>
          sort === "A-Z"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
        );
      }
      
    content = orderedTodos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    )) 
  } else if (todoStatus === 'failed') {
     content = <div>{error}</div>
  }

  return (
    <Box
      borderRadius={1}
      width='100%'
      sx={{ boxShadow: 2, p: 3 }}
      alignItems={"center"}
    >
      <Select
        labelId='sort-label'
        id='sort'
        value={sort}
        label='Sort'
        onChange={(e) => setSort(e.target.value)}
      >
        <MenuItem value={"Sort"}>Sort</MenuItem>
        <MenuItem value={"A-Z"}>A-Z</MenuItem>
        <MenuItem value={"Z-A"}>Z-A</MenuItem>
      </Select>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {content}
      </List>
    </Box>
  );
};

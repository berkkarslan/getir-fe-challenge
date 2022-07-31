import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { deleteTodo, toggleTodo } from "../features/todoSlice";
import { useDispatch } from 'react-redux'

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({
  todo,
}) => {
  const dispatch = useDispatch()<AppDispatch>;

  return (
    <>
      <ListItem
      key={todo.id}
        secondaryAction={
          <IconButton
            edge='end'
            aria-label='delete'
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton onClick={() => dispatch(toggleTodo(todo))} dense>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              data-testid="my-checkbox"
              onClick={() => dispatch(toggleTodo(todo))}
            />
          </ListItemIcon>

          <ListItemText
            primary={todo.title}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          />
        </ListItemButton>
      </ListItem>
      <Divider variant='inset' component='li' />
    </>
  );
};

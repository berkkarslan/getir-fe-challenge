interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type DeleteTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

type clientType = {
  body?: unknown;
  method?: string;
}

type IStoreState= {
  todos: Todo[],
  status: string,
  error: undefined | null | string,
}

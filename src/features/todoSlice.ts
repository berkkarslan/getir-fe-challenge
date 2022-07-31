import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/client'

const initialState: IStoreState = {
  todos: [],
  status: 'idle',
  error: null,
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await client.get('/todos')
  return response.data
})

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (todo: Todo) => {
    const response = await client.post('/todos', todo)
    return response.data
  }
)

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id: number) => {
    const response = await client.delete(`/todos/${id}`)
    return id;
  }
)

export const toggleTodo = createAsyncThunk(
  'todos/toggleTodo',
  async (todo: Todo) => {
    const response = await client.put(`/todos/${todo.id}`, {...todo, completed: true})
    return todo.id;
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.todos = [...action.payload];
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
      })
			.addCase(toggleTodo.fulfilled, (state, action) => {
				state.todos = state.todos.map((todo) => {
					if (todo.id === action.payload) {
						return {
							...todo,
							completed: !todo.completed,
						};
					}
					return todo;
				});
			
      })
			.addCase(deleteTodo.fulfilled, (state, action) => {
				state.todos.splice(state.todos.findIndex((todo: Todo) => todo.id === action.payload), 1);
			})
  },
})

export default todosSlice.reducer

export const selectAllTodos = (state: RootState) => state.todos.todos


import { render, screen } from "@testing-library/react";
import { TodoList } from "../components/TodoList";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("TodoList component", () => {
  test("it renders", () => {
    
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  });
});

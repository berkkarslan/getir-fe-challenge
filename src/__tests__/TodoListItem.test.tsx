import { render, screen } from "@testing-library/react";
import { TodoListItem } from "../components/TodoListItem";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("TodoListItem component", () => {
  const todo = {
    id: 1,
    title: "Ekmek",
    completed: true,
  };
  test("it renders", () => {
    
    render(
      <Provider store={store}>
        <TodoListItem todo={todo} />
      </Provider>
    );

    expect(screen.getByText("Ekmek")).toBeInTheDocument()
    // eslint-disable-next-line testing-library/no-node-access
    const checkbox = screen.getByTestId("my-checkbox").querySelector('input[type="checkbox"]')
    expect(checkbox).toBeChecked()
  });
});

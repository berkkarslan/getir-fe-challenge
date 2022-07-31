import { render, screen } from "@testing-library/react";
import { AddTodoForm } from "../components/AddTodoForm";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("AddTodoForm component", () => {
  test("it renders input", () => {
    render(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );
    expect(screen.getByLabelText("Text")).toBeInTheDocument();
  });

  test("it renders button", () => {
    render(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );
    expect(screen.getByTestId("my-button")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("App component", () => {
  test("it renders", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Getir ToDo")).toBeInTheDocument();
  });
});

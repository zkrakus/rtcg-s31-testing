import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText(/Hello World!/, { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'it's good to see you' if button was not clicked", () => {
    render(<Greeting/>)

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", { exact: false});
    expect(outputElement).toBeNull();
  })
});

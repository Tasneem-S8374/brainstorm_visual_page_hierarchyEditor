import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Visual Page Hierarchy Editor header", () => {
  render(<App />);
  expect(screen.getByText(/Visual Page Hierarchy Editor/i)).toBeInTheDocument();
});

test("renders Save button", () => {
  render(<App />);
  expect(screen.getByText(/Save/i)).toBeInTheDocument();
});

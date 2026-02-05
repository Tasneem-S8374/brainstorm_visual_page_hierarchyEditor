import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock reactflow completely
jest.mock("reactflow", () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div>,
  Background: () => <div />,
  Controls: () => <div />,
  MiniMap: () => <div />,
  useNodesState: () => [[], jest.fn(), jest.fn()],
  useEdgesState: () => [[], jest.fn(), jest.fn()],
  useReactFlow: () => ({ fitView: jest.fn() }),
}));

test("renders save button", () => {
  render(<App />);
  expect(screen.getByText(/save/i)).toBeInTheDocument();
});

test("renders load button", () => {
  render(<App />);
  expect(screen.getByText(/load/i)).toBeInTheDocument();
});

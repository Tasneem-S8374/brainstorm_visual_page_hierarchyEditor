import { render, screen } from "@testing-library/react";
import App from "./App";

// ✅ Mock reactflow for tests
jest.mock("reactflow", () => ({
  __esModule: true,
  default: ({ children }) => <div>{children}</div>,
  Background: () => <div />,
  Controls: () => <div />,
  MiniMap: () => <div />,
  useEdgesState: () => [[], jest.fn(), jest.fn()],
  useNodesState: () => [[], jest.fn(), jest.fn()],
  useReactFlow: () => ({ fitView: jest.fn() }),
}));

test("renders Save button", () => {
  render(<App />);
  expect(screen.getByText(/save/i)).toBeInTheDocument();
});

test("renders Load button", () => {
  render(<App />);
  expect(screen.getByText(/load/i)).toBeInTheDocument();
});

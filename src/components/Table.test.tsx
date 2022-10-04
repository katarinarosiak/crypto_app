import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renders table", () => {
  render(<Table />);
  const title = screen.getByText(/Symbol/i);
  expect(title).toBeInTheDocument();
});

test("renders tableData", () => {
  render(<Table />);
  const title = screen.getByText(/BCH/i);
  expect(title).toBeInTheDocument();
});

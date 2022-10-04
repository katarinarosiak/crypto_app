import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


test("renders App", () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders date in update", () => {
  render(<App />);
  const date = screen.getByText(/Lastly updated: (\d\d:\d\d:\d\d)/i);
  expect(date).toBeInTheDocument();
});
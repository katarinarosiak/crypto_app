import React from "react";
import { render, screen } from "@testing-library/react";
import Pairing from "./Pairing";

it('renders pairing content', () => {

  render(<Pairing />)

  const element = screen.getByText('Pairing:')
  expect(element).toBeDefined()
})
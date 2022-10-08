import { render, screen } from "@testing-library/react";
import CardChanges from "../pairing/CardChanges";
import { Changes } from "../../interfaces/interfaces";

describe('change card component', () => {
  it('load a change card',  () => {
    const change = {
      title: "day", 
      val: [430.80972733, 560.809123]
    } as Changes;

    render(<CardChanges change={change} idx={0} />)
    const cardElement = screen.getByText(/day/);
    expect(cardElement).toBeInTheDocument();
  });
});
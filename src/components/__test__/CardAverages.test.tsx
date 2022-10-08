import { render, screen } from "@testing-library/react";
import CardAverages from "../pairing/CardAverages";
import { Averages } from "../../interfaces/interfaces";

describe('average card component', () => {
  it('load a average card',  () => {
    const average = {
      title: "day", 
      val: 430.80972733
    } as Averages;

    render(<CardAverages average={average} idx={0} />)
    const cardElement = screen.getByText(/day/);
    expect(cardElement).toBeInTheDocument();
  });
});

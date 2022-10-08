import { render, screen } from "@testing-library/react";
import Dashboard from "../dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { data } from './exampleResponse.json'; 

const MockDashboard = () => {
  return (
    <BrowserRouter>
      <Dashboard 
        displayedCoins={data}
        displayFiatName={"Show All"}
        fiatNames={['AED', 'AFN']}
        filterByFiat={() => {}}
        isDropDownOpen={false}
        setIsDropDownOpen={() => {}}
        pairingNames={[]}
        setIsSearchBoxOpen={() => {}}
        isSearchBoxOpen={false}
      />
    </BrowserRouter>
  )
}

describe('Dashboard component', () => {
  it('load a Dashboard component',  () => {
    render(<MockDashboard />)
    const title = screen.getByText(/Dashboard/);
    expect(title).toBeInTheDocument();
  });


  it('load a Table',  async () => {
    render(<MockDashboard />)
    const heading = await screen.findByText(/Symbol/);
    expect(heading).toBeInTheDocument();
  });

  it('load the data in teh table',  async () => {
    render(<MockDashboard />)
    const pairingName = await screen.findByText(/ETH\/EUR/);
    expect(pairingName).toBeInTheDocument();
  });

  it('load the search box',  async () => {
    render(<MockDashboard />)
    const input = await screen.findByPlaceholderText(/Search for/);
    expect(input).toBeInTheDocument();
  });

  it('load the dropdown',  async () => {
    render(<MockDashboard />)
    const button = await screen.findByText(/Filter By Fiat/);
    expect(button).toBeInTheDocument();
  });	
});
# Katarina-FE-Challenge
# Mondu Frontend challenge

In this challenge you'll be given a simple react app that you will have to extend. This app will use the `https://bitcoinaverage-global-ethereum-index-v1.p.rapidapi.com`
endpoint and get the data for all coins that are supported in this endpoint. Documentation for this endpoint can be found here [https://rapidapi.com/blockchain-data-ltd-blockchain-data-ltd-default/api/global-ethereum-price-index-gex/](https://rapidapi.com/blockchain-data-ltd-blockchain-data-ltd-default/api/global-ethereum-price-index-gex/). We want you to implement two pages.
The first page will be the homepage (/Dashboard) and will retrieve the data of the pairings and display the data in a table. The columns of the table should be sortable. The data to be displaid is the pairing (ex. ETH/EUR), ask price, hourly, daily, weekly and monthly change. This page will also contain an input field where the user can type in the specific coin they want to check and after submitting the form should be redirected to the `/{pairing}` page. This input field should also show suggested pairings while the user is typing. Clicking on a suggestion should lead the user to the page for this specific pairing. Furthermore the page will have a button that will toggle the Fiat currency of the pairing, for example EUR to USD and vice versa.

The second page will be reachable from the `/{pairing}` and will display the `display_symbol`, `display_time`, `averages` and `changes`. Feel free to select whatever timeframes you want for the averages and changes. For the changes implement a button that let's the viewer see the changes in percent or price. On both pages indicate in some way that the change is positive or negative.

Regarding the styling, feel free to get creative, you can use any CSS framework that you have experience with to create a simple and nice to look at design for these pages. At the company we use [https://chakra-ui.com/](https://chakra-ui.com/), if you are comfortable with it you can try doing the challenge with the components provided by Chakra (but this is not a must). Of course you can also use a state handling framework too. Please implement tests that you think would be needed for this project. Create this project as if you would present it to a customer while also keeping scalability in mind (performance and code complexity).

For any question feel free to reach out.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### My notes: 
- Extend React app
- app uses 'https://bitcoinaverage-global-ethereum-index-v1.p.rapidapi.com' endpoint :
	- gets the for all conis (supported in this endpoint)
	- what types of data??

- endpoint documentation: 
https://rapidapi.com/blockchain-data-ltd-blockchain-data-ltd-default/api/global-ethereum-price-index-gex/

Todo:
1. Implement two pages:

1. First page: homepage (/Dashboard):
	- retrive teh data of the pairings and display data in table 
	Table specs: 
	- the columns of the table should be sortable 
	- The data to display:
			- (pairing) (RTH/EUR)
			- ask price
			- hourly (calculate by myslef?) => assumption
			- daily
			- weekly
			- monthly 
			(change)

	Form:
	- input field:
		- the user can type in a specific coint they want to check 
		- submit functionality (button? enter?)
	- suggested pairings (autocomplete)
	- on click on the pairing redirect to the {pairing} page 

	- Button: toggle the Fiat currency of the pairing (t.ex. EUR => USD or USD => EUR)
	After submit:
	- redirect to /{pairing} page
	- 

- indicate in some way that the change is positive or negative

Page 2:
/{pairing}
- display: display_symbol
- display_time
- averages
- changes

- select whatever timeframes for averages and changes 

- for changes:
	- implement a button that let's the viewers see the changes in percent or price 
	- indicate in some way that the change is positive or negative


	Notes:
	- Router 
	- pagination


	Extra:
	- implement tests
	- implement frontend framework 
	- state handling framework
	- keep scalability in mind (performance and code complexity)
	Repo:
	https://github.com/MonduCareers/Katarina-FE-Challenge.git


	Pairing: 
	exchange rate from ETH to EUR (ETH/EUR)
	
	global price index

[cointsymbol].ask
[cointsymbol].changes.price.day / week / month / 

DS:
{COIN : {

}}


take the DS :
- pair the pairings 
	baseCurrency / quoteCurrency
	ETH/EUR:{} 
	EUR/ETH:{}


	Questions: 
	- 

- change the name to contain 
	ETH/ZWL 


	Todo: 
	1. get data 
	2. sorting of columns
	3. input and auto...
	4. pagination
	5. use Memo
	6. CSS styling
	7. convert to TypeScript
	8. useContext 


contribution:
logo: <a href="https://www.flaticon.com/free-icons/bitcoin" title="bitcoin icons">Bitcoin icons created by Kiranshastry - Flaticon</a>
hamburger:
<a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Freepik - Flaticon</a>

x:
<a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Ilham Fitrotul Hayat - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Kiranshastry - Flaticon</a>


Todo: 

- local storage is not an option. what else can we use?? how often is the data updated? 
- autocorrect 
- dropdown 
- fonts (set all the same)
- autocomplete on key down and up and enter, styling
- dropdown arrow
- table: paddings of numbers 
- previous and next disable color
- fix indenteation
- remove comments
- do testing
- check if all teh requirements are met
- check why no minust values in table
- loading animation
- move up and down arrow on input and dropdown
- remove the same keys

Testing: 
- High val features
- Edge cases in high val features
- Easy to break 
- Basic react components :
	- user interactions
	- consitionals rendering
	- utils / hooks

- the received data is the right type
- choosing the fiat currency render the table for only those fiats 
- 

- check that after opening dopdown and input clicking outside closes the box 
- check that clicking on link redirect to a new page 
- update - updates the date, display the right date
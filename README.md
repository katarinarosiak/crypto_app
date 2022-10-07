# Katarina-FE-Challenge
# Mondu Frontend challenge 

# Overview:
B-Coin is a simple react application that uses Bitcoinaverage Global Ethereum Index API to query the newest data about crypto currencies such as average prices or changes withing a monts, weeks or day periods. The application has two pages: a homepage with a table that displays data and a 'Pairing' page that displays more granular data about a specific pairing (changes and averages).

# The navbar 
The navbar is added mainly for visual purposes. The 'home' link should redirect to home page if the user is on the 'Pairings' page. 

# The table
The data is displayed in a table which is sortable (in ascending and descending order). The values can by sorted by clicking on the table headers for a specific column.
There is also pagination added for the visual purposes so that each view displays 10 first entries.
All the negative values are styled with red color

# The dropdown button
The dropdown button allows users to display data for a specific fiat currency. After pressing on teh button the list of all available fiat currencies will be displayed. After choosing one of them the data in the table will be changed to display only pairings containing the chosen fiat. There is also option to display all the currencies. 

# The input search box
The search box allows users to search for specific pairings. Ater choosing the pairing user gets redirected to 'Pairings' page.

# The pairing page
The user gets redirected to 'Pairing' page that displays a titile (`display_symbol`) of the page, the date when was the data lastely (`display_time`) updated and data about `changes` and `averages` (monthly, week, day).
The changes information can be toggled between prices and percentage. 

 # Design 
 The design is quite simple but clear and responsive. 

 # Tech stack
 - I decided to use Tailwind as a CSS framework.
 - The table is build with React-table library.

 # Testing
 The application is tested with some basic unit tests (Jest.

 # Future work
 There is still a lot that could be done with this application that I was not able to do within the timeframe. 
 - Due to latency the data from the API takes about 1-2 seconds to be received and displayed. A loading animation could be a way to make this time less perceptible. 
 - Both dropdown and search box currently cannot be closed by clicking anywhere else on the screen. There is alos no possibility to move the focus with the keyboard arrows. This would deffinitely be something I would work with, if I had more time. 
 - Currently the dropdown allows to filter results for a specific fiat currency. It would be useful to have similar dropdown but for crypto currencies as well. 
 - Since there is a limitation for number of queries that can be made daily imposed by the API provider, it would be useful to have some types of caching mechanism. The response data could be for example stored in the local storage and used during a certain period of time. Then we could give the user an option to refresh the result with a 'update' button. 
  




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
- choosing a pairing redirects to another page (the link works)
- choosing a fiat in the dropdown filter the fiat currencies and displays only the filtered ones 
# Wallstreetbets

[See it Live!](http://wallstreetbets2.herokuapp.com/#/)

## Description
Wallstreetbets is a stock trading platform that offers real-time data for companies in the NASDAQ market and allows users to mimic buying, selling, and keeping track of stocks.  Theme is based off the subreddit /r/wallstreetbets.

## Features
* Secure frontend to backend user authentication using BCrypt.
* Track real stocks with real-time data
* Buy/Sell stocks and keep track of user's portfolio over time.
* Use interactive graph to view key financial metrics about an asset and its price over time.
* View portfolio value over time, current cash allocation, and holdings diversity.

## Technologies
* Backend: Rails/ActiveRecord/PostgreSQL/jBuilder
* Frontend: React/Redux
* Recharts: Used to create interactive graphs on D3 Platform.
* httparty: Allows for easier manipulation and access to data.
* figaro: Secures private information utilized in backend (API Key).
* Alphavantage API

## Database Schema
![](https://res.cloudinary.com/dcy8box3u/image/upload/v1531161713/Screen_Shot_2018-07-09_at_11.38.23_AM.png)
## Demo

### Dashboard
After logging in, users can view key portfolio performance metrics on their personal dashboard. The users can view their watchlisted assets that have their current price updated every 25 seconds.  Users can also keep track of their portfolio, and view the distribution of their assets on an interactive piechart.  

Users can also view an index of all assets on the platform as well as their current holdings and watched assets in a sticky sidebar.

![](https://media.giphy.com/media/dJiJiJvvG3w686OuaZ/giphy.gif)

### Asset Research and Trade
When navigating to an individual asset page, users can conduct basic research and make trades.
 * Asset price history is displayed in 1D, 1W, 1M, 1Y intervals on an interactive graph for better data visualization.
 * Users can buy and sell the asset stocks at real-time market prices.
 * Users can add the asset to their watchlist to track their real-time prices on the dashboard.

![](https://media.giphy.com/media/443D1tfGvh0cNwPtsw/giphy.gif)

## Code Samples

### Searchbar
Users can query for assets in the database (contains all NASDAQ listed companies) either by the name or symbol of the asset. Here is a code snippet of that implementation below.

```javascript
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.sym !== nextProps.match.params.sym) {
      this.setState({query: ''});
    }
  }

  handleChange (e) {
    this.setState({query: e.target.value}, () => {
      if (this.state.query === '') {
        this.props.clearAssets();
      } else {
      this.props.searchAssets(this.state.query);
    }
    }
  );
  }

  render () {
    return (
      <input
        id='search-bar'
        onChange={this.handleChange}
        value={this.state.query}
        placeholder='Search'
        />
    );
  }
}
```





## Future Plans
* Create an algorithm that generates a diverse portfolio with maximized gains and minimized risk
* Create an account page that allows a user to track their trade history
* Include a portfolio graph that allows user to track their 1d/1w/1m/1y history of their portfolio value
* Include adaptive design:
   * Ensure compatibility on all browsers
* Further polish user interface

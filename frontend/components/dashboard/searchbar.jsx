import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({query: e.target.value}, () => this.props.searchAssets(this.state.query));
  }

  render () {
    return (
      <input
        className='searchbar'
        onChange={this.handleChange}
        value={this.state.query}
        />
    );
  }
}

export default SearchBar;

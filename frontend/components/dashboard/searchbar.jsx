import React from 'react';
import { withRouter } from 'react-router-dom';

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

export default withRouter(SearchBar);

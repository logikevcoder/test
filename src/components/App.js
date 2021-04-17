import React, { Component } from 'react';
import '../styles/App.scss';
import Autocomplete from './Autocomplete';

class App extends Component {
  state = {
    keyword: '',
    results: [],
  };

  getData = async (inputText) => {
    let api_url, data;
    if (inputText !== '') {
      try {
        api_url = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputText}&apikey=GUO9GOF82DVL1REY`
        );
        data = await api_url.json();
      } catch (err) {
        console.log(err.message);
      }

      this.setState({ results: data.bestMatches });
    } else this.setState({ results: [] });
  };

  updateField = (field, value, update = true) => {
    if (update) this.getData(value);
    this.setState({ [field]: value });
  };

  render() {
    const { results, keyword } = this.state;

    return (
      <div className='App'>
        <Autocomplete
          placeholder={'Search for a stock'}
          results={results}
          keyword={keyword}
          updateField={this.updateField}
        />
      </div>
    );
  }
}

export default App;

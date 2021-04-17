import React, { Component } from 'react';
import SearchDetails from './SearchDetails';

export default class Autocomplete extends Component {
  render() {
    const { results, keyword, placeholder, updateField } = this.props;

    const updateText = (text) => {
      updateField('keyword', text, false);
      updateField('results', [], false);
    };

    const renderResults = results.map((element, index) => {
      const name = Object.values(element)[1];
      return <SearchDetails key={index} updateText={updateText} name={name} />;
    });

    return (
      <>
        <input
          className='search-input'
          type='text'
          placeholder={placeholder}
          value={keyword}
          updateText={updateText}
          onChange={(e) => updateField('keyword', e.target.value)}
        />
        {results.length > 0 ? (
          <div className='search-results'>{renderResults}</div>
        ) : null}
      </>
    );
  }
}

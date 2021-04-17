import React, { Component } from 'react';

export default class Autocomplete extends Component {
  render() {
    const { results, keyword, placeholder, updateField } = this.props;

    const updateText = (text) => {
      updateField('keyword', text, false);
      updateField('results', []);
    };

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
      </>
    );
  }
}

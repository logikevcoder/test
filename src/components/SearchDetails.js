import React, { Component } from 'react';

export default class SearchDetails extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

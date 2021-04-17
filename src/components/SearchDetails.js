import React from 'react';

const SearchDetails = ({ name, updateText }) => {
  return (
    <div onClick={() => updateText(name)}>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SearchDetails;

import React from 'react';

const SearchBar = (props) => {
  const {searchGiphy } = props;

  const handleChange = (event) => {
    // What is the keyword? It is the input of the user.
    // since it is a callback function, we get an event parameter.
    searchGiphy(event.currentTarget.value);
  }
  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
};

export default SearchBar;

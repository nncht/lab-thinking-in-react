import React from 'react';

const SearchBar = ({ searchQuery, onChangeInput }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={onChangeInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

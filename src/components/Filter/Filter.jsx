import React from 'react';

const Filter = ({ filterValue, handleFilter }) => {
  return (
    <div className="section">
      <h2 className="section__title">Contacts</h2>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className="form__input"
        type="text"
        name="filter"
        id="filter"
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchBar = props => {

  // Update parent's state.query with input
  const handleChange = e => {
    props.onChange(e.target.value);
  }

  return (
    <div className="list-contacts-top">
      <input
        className="search-contacts"
        type="text"
        placeholder="Search contacts"
        value={props.query}
        onChange={handleChange} />
      <Link to="/create" className="add-contact">
        Add Contact
      </Link>
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

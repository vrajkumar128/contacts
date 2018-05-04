import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class SearchBar extends React.Component {
  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search contacts"
          value={this.props.query}
          onChange={this.handleChange} />
        <Link to="/create" className="add-contact">
          Add Contact
        </Link>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

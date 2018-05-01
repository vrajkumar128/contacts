import React from 'react';
import PropTypes from 'prop-types';

export class ListContacts extends React.Component {
  state = {
    query: ''
  }

  // Update state.query with search input
  updateQuery = e => {
    this.setState({
      query: e.target.value
    });
  }

  // Reset state.query
  clearQuery = () => {
    this.setState({
      query: ''
    });
  }

  render() {
    const { query } = this.state;
    const { contacts, onRemove } = this.props;

    // Filter displayed contacts based on if contacts' names contain query
    let filteredContacts = query === ''
    ? contacts
    : contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={query}
            onChange={this.updateQuery} />
        </div>

        {filteredContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Now showing {filteredContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className="contact-list">
          {filteredContacts.map(contact =>
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }} />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p><a href={`https://twitter.com/${contact.handle}`}>{contact.handle}</a></p>
              </div>
              <button className="contact-remove" onClick={() => onRemove(contact)}>
                Remove
              </button>
            </li>)}
        </ol>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
};

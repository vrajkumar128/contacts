import React from 'react';
import PropTypes from 'prop-types';

export class ListContacts extends React.Component {
  state = {
    query: ''
  }

  // Update state.query with search input
  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input className="search-contacts" placeholder="Search contacts" value={this.state.query} onChange={this.handleChange} />
        </div>
        <ol className="contact-list">
          {this.props.contacts.map(contact =>
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }} />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p><a href={`https://twitter.com/${contact.handle}`}>{contact.handle}</a></p>
              </div>
              <button className="contact-remove" onClick={() => this.props.onRemove(contact)}>
                Remove
              </button>
            </li>)}
        </ol>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired
};

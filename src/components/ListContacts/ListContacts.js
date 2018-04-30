import React from 'react';

class ListContacts extends React.Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact =>
          <li key={contact.id} className="contact-list-item">
            <div className="contact-avatar" style={{
              backgroundImage: `url(${contact.avatarURL})`
            }} />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p><a href={`https://twitter.com/${contact.handle}`}>@{contact.handle}</a></p>
            </div>
          </li>)}
      </ol>
    );
  }
}

export default ListContacts;

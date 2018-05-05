import React from 'react';
import PropTypes from 'prop-types';

export const Contact = props => (
  <li className="contact-list-item">
    <div className="contact-avatar" style={{
      backgroundImage: `url(${props.contactAvatarURL})`
    }} />
    <div className="contact-details">
      <p>{props.contactName}</p>
      <p><a href={`https://twitter.com/${props.contactHandle}`}>{props.contactHandle}</a></p>
    </div>
    <button className="contact-remove" onClick={() => props.onRemove(props.contact)}>
      Remove
    </button>
  </li>
);

Contact.propTypes = {
  contactAvatarURL: PropTypes.string,
  contactName: PropTypes.string.isRequired,
  contactHandle: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
}

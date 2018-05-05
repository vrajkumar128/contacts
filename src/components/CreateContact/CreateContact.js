import React from 'react';
import { Link } from 'react-router-dom';
import ImageInput from '../../ImageInput';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

export const CreateContact = props => {

  // Convert captured form data into JSON and add it to parent's state.contacts
  const handleSubmit = e => {
    e.preventDefault();
    let contact = serializeForm(e.target, {
      hash: true
    });
    props.onCreateContact(contact);
  }

  return (
    <div>
      <Link
        className="close-create-contact"
        to="/">
          Close
      </Link>
      <form onSubmit={handleSubmit} className="create-contact-form">
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
}

CreateContact.propTypes = {
  onCreateContact: PropTypes.func.isRequired
}

import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';

export class ContactList extends React.Component {

  // Reorder contact list after dragging and dropping
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  // Handle dropping
  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const contacts = this.reorder(
      this.props.contacts,
      result.source.index,
      result.destination.index
    );

    this.props.updateContacts(contacts);
  }

  render() {
    const { query, contacts } = this.props;

    // Filter displayed contacts based on query
    let filteredContacts = query === ''
    ? contacts
    : contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()));

    return (
      <div>
        {filteredContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Now showing {filteredContacts.length} of {contacts.length}</span>
            <button onClick={this.props.clearQuery}>Show all</button>
          </div>
        )}
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ol className="contact-list">
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                >
                  {filteredContacts.map((contact, index) => (
                    <Draggable key={contact.id} draggableId={contact.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Contact
                            contact={contact}
                            key={contact.id}
                            contactAvatarURL={contact.avatarURL}
                            contactName={contact.name}
                            contactHandle={contact.handle}
                            onRemove={this.props.onRemove}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </ol>
        </DragDropContext>
      </div>
    );
  }
}

ContactList.propTypes = {
  updateContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
}

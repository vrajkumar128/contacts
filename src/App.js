import React from 'react';
import { ListContacts } from './components/ListContacts/ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends React.Component {
  state = {
    contacts: []
  }

  async componentDidMount() {
    let contacts = await ContactsAPI.getAll();
    this.setState({
      contacts: contacts
    });
  }

  // Filter a contact out of state.contacts
  removeContact = contact => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== contact.id)
    });
    ContactsAPI.remove(contact);
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} onRemove={this.removeContact} />
      </div>
    )
  }
}

export default App;

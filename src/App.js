import React from 'react';
import { Route } from 'react-router-dom';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ContactList } from './components/ContactList/ContactList';
import { CreateContact } from './components/CreateContact/CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends React.Component {
  state = {
    contacts: [],
    query: ''
  }

  // Populate state.contacts with request to backend server
  async componentDidMount() {
    let contacts = await ContactsAPI.getAll();
    this.setState({
      contacts: contacts
    });
  }

  // Update state.contacts with new array
  updateContacts = contacts => {
    this.setState({
      contacts: contacts
    });
  }

  // Update state.query with new string
  updateQuery = query => {
    this.setState({
      query: query
    });
  }

  // Reset state.query
  clearQuery = () => {
    this.setState({
      query: ''
    });
  }

  // Filter a contact out of state.contacts
  removeContact = contact => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== contact.id)
    });
    ContactsAPI.remove(contact);
  }

  // Add a new contact to state.contacts
  async createContact(contact) {
    let newContact = await ContactsAPI.create(contact);
    this.setState({
      contacts: this.state.contacts.concat([newContact])
    });
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <div className="list-contacts">
            <SearchBar
              query={this.state.query}
              onChange={this.updateQuery}
            />
            <ContactList
              contacts={this.state.contacts}
              query={this.state.query}
              updateContacts={this.updateContacts}
              clearQuery={this.clearQuery}
              onRemove={this.removeContact}
            />
          </div>
        )} />
        <Route path="/create" render={({ history }) => (
          <CreateContact onCreateContact={contact => {
            this.createContact(contact);
            history.push('/');
          }} />
        )} />
      </div>
    );
  }
}

export default App;

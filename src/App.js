import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ContactList } from './components/ContactList/ContactList';
import { CreateContact } from './components/CreateContact/CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends React.Component {
  state = {
    contacts: [],
    query: '',
    screen: 'list'
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

  // Change state.screen to 'create'
  updateScreen = () => {
    this.setState({
      screen: 'create'
    })
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <div className="list-contacts">
            <SearchBar
              query={this.state.query}
              onChange={this.updateQuery}
              onNavigate={this.updateScreen}
            />
            <ContactList
              contacts={this.state.contacts}
              query={this.state.query}
              updateContacts={this.updateContacts}
              clearQuery={this.clearQuery}
              onRemove={this.removeContact}
            />
          </div>
        )}
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    );
  }
}

export default App;

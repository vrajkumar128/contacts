import React from 'react';
import { ListContacts } from './components/ListContacts/ListContacts';

class App extends React.Component {
  state = {
    contacts: [
 {
   "id": "karen",
   "name": "Karen Isgrigg",
   "handle": "@karen_isgrigg",
   "avatarURL": "http://localhost:5001/karen.jpg"
 },
 {
   "id": "richard",
   "name": "Richard Kalehoff",
   "handle": "@richardkalehoff",
   "avatarURL": "http://localhost:5001/richard.jpg"
 },
 {
   "id": "tyler",
   "name": "Tyler McGinnis",
   "handle": "@tylermcginnis",
   "avatarURL": "http://localhost:5001/tyler.jpg"
 }
]
  }

  // Filter a contact out of state.contacts
  removeContact = contact => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== contact.id)
    });
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

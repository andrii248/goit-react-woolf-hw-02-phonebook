import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  checkNewContact = newContact => {
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(newContact.name + 'is already available in Contact List');
      return true;
    }
    return false;
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  dltContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    const availableContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return (
      <div className="main">
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
          checkNewContact={this.checkNewContact}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChangeFilter} />
        <ContactList
          availableContacts={availableContacts}
          dltContact={this.dltContact}
        />
      </div>
    );
  }
}

export default App;

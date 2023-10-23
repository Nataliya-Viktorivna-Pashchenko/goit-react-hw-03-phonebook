import { Component } from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import css from "./Styles.module.css";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmitHandler = contact => {
    if (this.state.contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is already in the contacts list`);
      return;
    }
    this.setState(() => {
      return {
        contacts: this.state.contacts.concat(contact),
      };
    });
  };

  onChangeFilter = event => {
    console.log(event.target.value);
    this.setState(() => {
      return {
        filter: event.target.value,
      };
    });
  };

  filterList = () => {
    const normilizedFilter = this.state.filter.toLowerCase();
    const filterList = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
    return filterList;

  };

  onDelete = id => {
    this.setState(({ contacts })=>({
      contacts: [...contacts.filter(contact => contact.id !== id)],
    }));
  };
 

  render() {
    return (
      <div className={css.main}>
        <>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.onFormSubmitHandler}></ContactForm>
          <h2>Contacts:</h2>
<Filter value={this.state.filter} onChange={this.onChangeFilter} />
          <ContactList contacts={this.filterList()} onDelete={this.onDelete} />
        
        </>
      </div>
    );
  }
}
import { Component } from "react";
import { nanoid } from 'nanoid';
import css from "./Styles.module.css"

export class ContactForm extends Component {

  state = {
    name: '',
    number: '',
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log(event.target.elements.name.value);

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    this.props.onSubmit(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
        
        <form className={css.form} onSubmit={this.onFormSubmit}>
        <label>
          Name
        </label>

            <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={this.onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />

        <label>
          Number
        </label>

            <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={this.onInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { name: '', number: '' };

  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      name,
      number,
      id: String(nanoid(4)),
    };
    if (this.props.checkNewContact(newContact)) {
      return;
    }
    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { number, name } = this.state;

    return (
      <form className={css.form} onSubmit={this.onSubmit}>
        <label className={css.label}>
          Name
          <input
            onChange={this.onChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            onChange={this.onChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add new contact</button>
      </form>
    );
  }
}

export default ContactForm;

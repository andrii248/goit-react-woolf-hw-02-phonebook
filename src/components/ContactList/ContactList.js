import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ availableContacts, dltContact }) => {
  return (
    <ul className={css.list}>
      {availableContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          dltContact={dltContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;

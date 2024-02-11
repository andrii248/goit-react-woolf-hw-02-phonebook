import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, dltContact }) => {
  return (
    <li className={css.item} id={id}>
      {name}: {number}
      <button className={css.btn} type="button" onClick={() => dltContact(id)}>
        {' '}
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

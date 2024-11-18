
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.contactItem}>
        <Contact {...contact} onDelete={() => onDeleteContact(contact.id)} />
      </li>
    ))}
  </ul>
);

export default ContactList;

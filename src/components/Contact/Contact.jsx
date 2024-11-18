import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => (
  <div>
  <div className={styles.contactDetails}>
        <p className={styles.contactName}>
          <FaUserAlt className={styles.icon} /> {name}
        </p>
        <p className={styles.contactNumber}>
          <FaPhoneAlt className={styles.icon} /> {number}
        </p>
        </div>
        <button className={styles.deleteButton} onClick={onDelete}>Delete</button>
  </div>
);

export default Contact;


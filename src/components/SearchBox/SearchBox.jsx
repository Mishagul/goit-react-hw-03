import styles from './SearchBox.module.css'
const SearchBox = ({ value, onChange }) => (
  <label>
    Find contacts by name:
    <input className={styles.SearchBox} type="text" value={value} onChange={onChange} />
  </label>
);

export default SearchBox;

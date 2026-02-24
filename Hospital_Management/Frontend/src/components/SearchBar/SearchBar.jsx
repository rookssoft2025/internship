import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder = 'Search...', value, onChange }) => {
  return (
    <div className={styles.searchBar}>
      <FiSearch className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;

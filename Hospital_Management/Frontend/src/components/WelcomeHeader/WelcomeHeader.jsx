import React from 'react';
import styles from './WelcomeHeader.module.css';

const WelcomeHeader = ({ name = 'Name' }) => {
  return (
    <div className={styles.header}>
      <span className={styles.hello}>Hello {name}</span>
      <h2 className={styles.welcome}>Welcome Back</h2>
    </div>
  );
};

export default WelcomeHeader;

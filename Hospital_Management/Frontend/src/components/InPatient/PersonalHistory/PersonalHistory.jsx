import React from 'react';
import styles from './PersonalHistory.module.css';

const PersonalHistory = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>PERSONAL HISTORY</h3>
      <div className={styles.grid}>
        <label className={styles.checkItem}>
          <span>Alcohol</span>
          <input type="checkbox" />
        </label>
        <label className={styles.checkItem}>
          <span>Married</span>
          <input type="checkbox" defaultChecked />
        </label>
        <label className={styles.checkItem}>
          <span>Tobacco</span>
          <input type="checkbox" />
        </label>
        <div className={styles.numberField}>
          <span>Number Of Children</span>
          <input type="number" defaultValue={0} min={0} />
        </div>
        <label className={styles.checkItem}>
          <span>Vegetarian</span>
          <input type="checkbox" />
        </label>
        <label className={styles.checkItem}>
          <span>Postmenopausal</span>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default PersonalHistory;

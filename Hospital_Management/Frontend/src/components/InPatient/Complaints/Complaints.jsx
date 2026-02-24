import React from 'react';
import styles from './Complaints.module.css';

const Complaints = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>COMPLAINTS AND DURATION</h3>
      <div className={styles.content}>
        <textarea className={styles.textarea} rows={4} placeholder=""></textarea>
        <div className={styles.conditions}>
          <div className={styles.row}>
            <span className={styles.label}>HT</span>
            <input type="text" className={styles.condInput} />
            <span className={styles.label}>CKD</span>
            <input type="text" className={styles.condInput} />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>DM</span>
            <input type="text" className={styles.condInput} />
            <span className={styles.label}>Others</span>
            <input type="text" className={styles.condInput} />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>BA</span>
            <input type="text" className={styles.condInput} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;

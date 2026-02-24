import React from 'react';
import styles from './MedicalHistory.module.css';

const MedicalHistory = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>MEDICAL HISTORY</h3>
      <div className={styles.field}>
        <label>Previous Procedure</label>
        <textarea rows={4} placeholder=""></textarea>
      </div>
      <div className={styles.field}>
        <label>Family History</label>
        <textarea rows={4} placeholder=""></textarea>
      </div>
    </div>
  );
};

export default MedicalHistory;

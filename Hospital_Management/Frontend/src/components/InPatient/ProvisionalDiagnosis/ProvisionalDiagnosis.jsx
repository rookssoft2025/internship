import React from 'react';
import styles from './ProvisionalDiagnosis.module.css';

const ProvisionalDiagnosis = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>PROVISIONAL DIAGNOSIS</h3>
      <textarea className={styles.textarea} rows={5} placeholder=""></textarea>
    </div>
  );
};

export default ProvisionalDiagnosis;

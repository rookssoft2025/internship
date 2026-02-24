import React from 'react';
import styles from './GeneralExamination.module.css';

const GeneralExamination = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>GENERAL EXAMINATION</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>BP</label>
          <input type="text" placeholder="136/82 mmHg" />
        </div>
        <div className={styles.field}>
          <label>HR</label>
          <input type="text" placeholder="E.g. 88 bpm" />
        </div>
        <div className={styles.field}>
          <label>PR</label>
          <input type="text" placeholder="E.g. 76 bpm" />
        </div>
        <div className={styles.field}>
          <label>SPO2</label>
          <input type="text" placeholder="E.g. 98%" />
        </div>
        <div className={styles.field}>
          <label>EDEMA</label>
          <input type="text" placeholder="E.g. Mild Pedal" />
        </div>
        <div className={styles.field}>
          <label>Temp</label>
          <input type="text" placeholder="E.g. 98.7°F" />
        </div>
        <div className={styles.field}>
          <label>Weight</label>
          <input type="text" placeholder="E.g. 68 Kg" />
        </div>
        <div className={styles.field}>
          <label>Height</label>
          <input type="text" placeholder="E.g. 180 cm" />
        </div>
        <div className={styles.field}>
          <label>BMI</label>
          <input type="text" placeholder="E.g. 20.8 Kg/m²" />
        </div>
      </div>
    </div>
  );
};

export default GeneralExamination;

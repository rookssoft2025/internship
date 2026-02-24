import React from 'react';
import styles from './AdmissionDetails.module.css';

const AdmissionDetails = ({ doctors = [] }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>ADMISSION DETAILS</h3>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.field}>
            <label>Admission Date</label>
            <input type="text" placeholder="E.g. 12-08-2025" />
          </div>
          <div className={styles.field}>
            <label>Admission Time</label>
            <input type="text" placeholder="E.g. 10:45 AM" />
          </div>
          <div className={styles.field}>
            <label>Discharge Date</label>
            <input type="text" placeholder="E.g. 12-09-2025" />
          </div>
          <div className={styles.field}>
            <label>Discharge Time</label>
            <input type="text" placeholder="E.g. 10:45 AM" />
          </div>
        </div>
        <div className={styles.right}>
          <label className={styles.modeLabel}>Mode Of Admission</label>
          <div className={styles.checkboxGroup}>
            {['Package', 'Non Package', 'Referred', 'OP', 'None'].map((mode) => (
              <label key={mode} className={styles.checkboxItem}>
                <span>{mode}</span>
                <input type="checkbox" />
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.doctorField}>
        <label>Assigned Doctor</label>
        <select>
          <option value="">E.g. Dr. John Doe</option>
          {doctors.map((doc) => (
            <option key={doc} value={doc}>{doc}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AdmissionDetails;

import React from 'react';
import styles from './PatientInfo.module.css';

const PatientInfo = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>PATIENT INFORMATION</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Patient Name</label>
          <input type="text" placeholder="E.g. John Doe" />
        </div>
        <div className={styles.field}>
          <label>Age</label>
          <input type="text" placeholder="E.g. 30" />
        </div>
        <div className={styles.field}>
          <label>Sex</label>
          <select>
            <option value="">E.g. Male</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.field}>
          <label>Date</label>
          <input type="text" placeholder="E.g. 12-08-2000" />
        </div>
        <div className={styles.field}>
          <label>DOB</label>
          <input type="text" placeholder="E.g. 12-01-2060" />
        </div>
        <div className={styles.field}>
          <label>Nationality</label>
          <input type="text" placeholder="E.g. Indian" />
        </div>
        <div className={`${styles.field} ${styles.addressField}`}>
          <label>Address</label>
          <textarea placeholder="E.g. 12/5 xyz Street, Nagercoil" rows={2}></textarea>
        </div>
        <div className={styles.field}>
          <label>Aadhar No</label>
          <input type="text" placeholder="E.g. 3060 3032 3030" />
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.field}>
          <label>Contact Person</label>
          <input type="text" placeholder="E.g. John Doe" />
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.field}>
          <label>Room No</label>
          <input type="text" placeholder="E.g. 306 A" />
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;

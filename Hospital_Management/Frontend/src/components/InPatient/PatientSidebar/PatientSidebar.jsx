import React from 'react';
import { FiCamera } from 'react-icons/fi';
import styles from './PatientSidebar.module.css';

const PatientSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>
          <FiCamera className={styles.cameraIcon} />
        </div>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label>Patient Id</label>
          <input type="text" placeholder="" />
        </div>
        <div className={styles.field}>
          <label>IP - No</label>
          <input type="text" placeholder="" />
        </div>
        <div className={styles.field}>
          <label>Consent No</label>
          <input type="text" placeholder="" />
        </div>
      </div>
    </div>
  );
};

export default PatientSidebar;

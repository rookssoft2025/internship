import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './CurrentMedication.module.css';

const CurrentMedication = ({ medicines = [] }) => {
  const [selected, setSelected] = useState([]);
  const [current, setCurrent] = useState('');

  const handleAdd = () => {
    if (current && !selected.includes(current)) {
      setSelected([...selected, current]);
      setCurrent('');
    }
  };

  const handleRemove = (med) => {
    setSelected(selected.filter((m) => m !== med));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>CURRENT MEDICATION</h3>
      <div className={styles.selectWrapper}>
        <select
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className={styles.select}
        >
          <option value="">E.g. Sample Medicine</option>
          {medicines.map((med) => (
            <option key={med} value={med}>{med}</option>
          ))}
        </select>
        <button className={styles.addBtn} onClick={handleAdd}>+</button>
      </div>
      <div className={styles.tags}>
        {selected.map((med) => (
          <span key={med} className={styles.tag}>
            {med}
            <FiX className={styles.removeIcon} onClick={() => handleRemove(med)} />
          </span>
        ))}
        {selected.length === 0 && (
          <>
            <span className={styles.tag}>
              Medicine Name <FiX className={styles.removeIcon} />
            </span>
            <span className={styles.tag}>
              Medicine Name <FiX className={styles.removeIcon} />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CurrentMedication;

import React from 'react';
import styles from './StatsCard.module.css';

const StatsCard = ({ label, sub, value, color, isText }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span className={styles.label}>{label}</span>
        {sub && <span className={styles.sub}>{sub}</span>}
        <span className={`${styles.value} ${isText ? styles.textValue : ''}`}>
          {value}
        </span>
      </div>
      <div className={styles.iconCircle} style={{ backgroundColor: color }}>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
};

export default StatsCard;

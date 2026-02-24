import React from 'react';
import styles from './CourierCard.module.css';

const statusColors = {
  Packed: { bg: '#fff3e0', color: '#e65100', label: 'Packed' },
  Shipped: { bg: '#e8f5e9', color: '#2e7d32', label: 'Shipped' },
  Delivered: { bg: '#e3f2fd', color: '#1565c0', label: 'Delivered' },
};

const CourierCard = ({ name, prescription, trackingId, contactNo, billNo, date, status }) => {
  const statusStyle = statusColors[status] || statusColors.Packed;

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.avatar}></div>
        <div className={styles.info}>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.prescription}>Prescription {prescription}</span>
        </div>
        <span
          className={styles.status}
          style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}
        >
          {statusStyle.label}
        </span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.detail}>
          <span className={styles.label}>Tracking Id</span>
          <span className={styles.value}>{trackingId}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>Bill No</span>
          <span className={styles.value}>{billNo}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.detail}>
          <span className={styles.label}>Contact No.</span>
          <span className={styles.value}>{contactNo}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}></span>
          <span className={styles.value}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CourierCard;

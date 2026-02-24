import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUserPlus, FiUsers, FiCalendar, FiPackage, FiShoppingBag, FiBox } from 'react-icons/fi';
import styles from './Navbar.module.css';

const iconMap = {
  dashboard: <FiHome />,
  registration: <FiUserPlus />,
  inpatient: <FiUsers />,
  followup: <FiCalendar />,
  stock: <FiPackage />,
  medicine: <FiBox />,
  sales: <FiShoppingBag />,
};

const Navbar = ({ appName = 'Hospital Management', navLinks = [], userName = 'SA' }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}></div>
        <span className={styles.appName}>{appName}</span>
      </div>
      <div className={styles.center}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.navIcon}>{iconMap[link.icon]}</span>
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.avatar}>{userName}</div>
      </div>
    </nav>
  );
};

export default Navbar;

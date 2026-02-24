import React, { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader';
import StatsCard from '../../components/StatsCard/StatsCard';
import Tabs from '../../components/Tabs/Tabs';
import SearchBar from '../../components/SearchBar/SearchBar';
import CourierCard from '../../components/Cards/CourierCard';
import Pagination from '../../components/Pagination/Pagination';
import data from '../../data/salesCourierData.json';
import styles from './SalesCourier.module.css';

const ITEMS_PER_PAGE = 10;

const SalesCourier = () => {
  const [activeTab, setActiveTab] = useState('Courier');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const tabs = ['Sales', 'Courier'];

  const filteredCouriers = useMemo(() => {
    let list = data.couriers;
    if (statusFilter !== 'All') {
      list = list.filter((c) => c.status === statusFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.prescription.toLowerCase().includes(q) ||
          c.billNo.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredCouriers.length / ITEMS_PER_PAGE));
  const paginatedCouriers = filteredCouriers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className={styles.page}>
      <Navbar navLinks={data.navLinks} />
      <div className={styles.container}>
        <WelcomeHeader />
        <div className={styles.statsRow}>
          {data.stats.map((stat) => (
            <StatsCard key={stat.id} {...stat} />
          ))}
        </div>

        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'Courier' && (
          <>
            <div className={styles.toolbar}>
              <SearchBar
                placeholder="Enter Prescription Id Or Bill No"
                value={search}
                onChange={setSearch}
              />
              <div className={styles.toolbarRight}>
                <div className={styles.filterGroup}>
                  <label className={styles.filterLabel}>Status</label>
                  <select
                    className={styles.filterSelect}
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    {data.statusOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <button className={styles.newCourierBtn}>New Courier</button>
              </div>
            </div>

            <div className={styles.grid}>
              {paginatedCouriers.map((courier) => (
                <CourierCard key={courier.id} {...courier} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {activeTab === 'Sales' && (
          <div className={styles.placeholder}>
            <p>Sales tab content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesCourier;

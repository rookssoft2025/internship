import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader';
import StatsCard from '../../components/StatsCard/StatsCard';
import Tabs from '../../components/Tabs/Tabs';
import PatientSidebar from '../../components/InPatient/PatientSidebar/PatientSidebar';
import PatientInfo from '../../components/InPatient/PatientInfo/PatientInfo';
import AdmissionDetails from '../../components/InPatient/AdmissionDetails/AdmissionDetails';
import MedicalHistory from '../../components/InPatient/MedicalHistory/MedicalHistory';
import Complaints from '../../components/InPatient/Complaints/Complaints';
import PersonalHistory from '../../components/InPatient/PersonalHistory/PersonalHistory';
import CurrentMedication from '../../components/InPatient/CurrentMedication/CurrentMedication';
import GeneralExamination from '../../components/InPatient/GeneralExamination/GeneralExamination';
import ProvisionalDiagnosis from '../../components/InPatient/ProvisionalDiagnosis/ProvisionalDiagnosis';
import data from '../../data/inPatientData.json';
import styles from './InPatient.module.css';

const InPatient = () => {
  const [activeTab, setActiveTab] = React.useState('New Patient');
  const tabs = ['New Patient', 'Existing Patient', 'In Patient Logs'];

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

        <div className={styles.formArea}>
          <div className={styles.topRow}>
            <PatientSidebar />
            <PatientInfo />
          </div>

          <div className={styles.middleRow}>
            <AdmissionDetails doctors={data.doctors} />
            <MedicalHistory />
          </div>

          <Complaints />

          <div className={styles.middleRow}>
            <PersonalHistory />
            <CurrentMedication medicines={data.medicines} />
          </div>

          <div className={styles.middleRow}>
            <GeneralExamination />
            <ProvisionalDiagnosis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPatient;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InPatient from './pages/InPatient/InPatient';
import SalesCourier from './pages/SalesCourier/SalesCourier';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/in-patient" replace />} />
        <Route path="/in-patient" element={<InPatient />} />
        <Route path="/sales-courier" element={<SalesCourier />} />
        {/* Placeholder routes for other nav items */}
        <Route path="/dashboard" element={<InPatient />} />
        <Route path="/patient-registration" element={<InPatient />} />
        <Route path="/follow-up" element={<InPatient />} />
        <Route path="/stock-management" element={<SalesCourier />} />
        <Route path="/medicine-issue" element={<SalesCourier />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
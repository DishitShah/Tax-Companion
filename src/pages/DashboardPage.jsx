import React from 'react';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import TaxPlanningWidget from '../components/dashboard/TaxPlanningWidget';
import QuickActionTiles from '../components/dashboard/QuickActionTiles';

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <DashboardOverview />
      <TaxPlanningWidget />
      <QuickActionTiles />
    </div>
  );
};

export default DashboardPage;
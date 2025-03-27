import React from 'react';
import FilingAssistant from '../components/filing/FilingAssistant';
import ITRForm from '../components/filing/ITRForm';
import FilingStatus from '../components/filing/FilingStatus';

const FilingPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <FilingAssistant />
      <ITRForm />
      <FilingStatus status="Pending" />
    </div>
  );
};

export default FilingPage;
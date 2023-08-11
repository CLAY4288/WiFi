import React from 'react';
import WifiManager from '../components/WifiManager';
import ClientBlocker from '../components/ClientBlocker';
import ChildPhoneManager from '../components/ChildPhoneManager';
import VisitedPagesViewer from '../components/VisitedPagesViewer';

const Home: React.FC = () => {
  return (
    <div>
      <WifiManager />
      <ClientBlocker />
      <ChildPhoneManager />
      <VisitedPagesViewer />
    </div>
  );
};

export default Home;
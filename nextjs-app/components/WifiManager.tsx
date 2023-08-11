import React from 'react';

interface WifiManagerProps {
  ip: string;
}

const WifiManager: React.FC<WifiManagerProps> = ({ ip }) => {
  return (
    <div id="wifi-manager">
      <h2>Administrador de WiFi</h2>
      <p>IP actual: {ip}</p>
    </div>
  );
};

export default WifiManager;
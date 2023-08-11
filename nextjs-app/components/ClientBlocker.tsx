import React, { useState } from 'react';
import { blockClient } from '../utils/clients';

const ClientBlocker: React.FC = () => {
  const [clientId, setClientId] = useState('');

  const handleBlock = () => {
    blockClient(clientId);
    setClientId('');
  };

  return (
    <div id="client-blocker">
      <h2>Bloquear a clientes indeseados</h2>
      <input
        type="text"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        placeholder="Ingrese el ID del cliente"
      />
      <button onClick={handleBlock}>Bloquear Cliente</button>
    </div>
  );
};

export default ClientBlocker;
import React, { useState } from 'react';
import { managePhone } from '../utils/phones';

const ChildPhoneManager: React.FC = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlePhoneSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    managePhone(phone);
    setPhone('');
  };

  return (
    <div id="child-phone-manager">
      <h2>Administrar teléfonos de mis hijos</h2>
      <form onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Ingrese el número de teléfono"
        />
        <button type="submit">Administrar teléfono</button>
      </form>
    </div>
  );
};

export default ChildPhoneManager;
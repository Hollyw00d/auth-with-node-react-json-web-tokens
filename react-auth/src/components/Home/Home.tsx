import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('You are not logged in.');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('user');

        const user = await response.data;

        setMessage(`Hi ${user.first_name} ${user.last_name}`);
      } catch (error) {
        setMessage('Your are not logged in.');
      }
    })();
  }, []);

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <h3>{message}</h3>
      </main>
    </div>
  );
}

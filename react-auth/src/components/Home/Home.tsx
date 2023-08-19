import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../redux/store';
import { setAuth } from '../../redux/authSlice';

export default function Home() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const auth = useSelector((state: RootState) => state.auth.value);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('user');

        setMessage(`Hi ${data.first_name} ${data.last_name}`);
        dispatch(setAuth(true));
      } catch (error) {
        setMessage('Your are not logged in.');
        dispatch(setAuth(false));
      }
    })();
  }, []);

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <h3>{auth ? message : 'You are not logged in.'}</h3>
      </main>
    </div>
  );
}

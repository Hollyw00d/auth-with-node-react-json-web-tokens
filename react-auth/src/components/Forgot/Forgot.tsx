import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import Utilities from '../../utils/utilities';

export default function Forgot() {
  const utils = new Utilities();
  const year = utils.getYear();

  const [email, setEmail] = useState('');
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: ''
  });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    /* eslint-disable @typescript-eslint/no-unused-vars, no-empty */
    try {
      await axios.post('forgot', {
        email
      });

      setNotify({
        show: true,
        error: false,
        message: 'Please check your email!'
      });
    } catch (error) {
      setNotify({
        show: true,
        error: true,
        message: 'Error occurred!'
      });
    }
    /* eslint-enable */
  };

  let info = null;
  if (notify.show) {
    info = (
      <div
        className={notify.error ? 'alert alert-danger' : 'alert alert-success'}
        role="alert"
      >
        {notify.message}
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        {info}
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Forgot Your Password</h1>

          <div>
            <label htmlFor="email-login" className="position-relative w-100">
              <span>Email</span>
              <input
                type="email"
                className="form-control"
                id="email-login"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Submit
          </button>
          <p className="my-3 text-body-secondary">&copy; {year}</p>
        </form>
      </main>
    </div>
  );
}

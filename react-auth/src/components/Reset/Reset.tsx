import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';
import Utilities from '../../utils/utilities';

export default function Reset() {
  const utils = new Utilities();
  const year = utils.getYear();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { token } = useParams();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    /* eslint-disable @typescript-eslint/no-unused-vars, no-empty */
    try {
      await axios.post('reset', {
        token,
        password,
        password_confirm: passwordConfirm
      });

      setRedirect(true);
    } catch (error) {
      setRedirect(false);
    }
    /* eslint-enable */
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Reset your password</h1>

          <div>
            <label
              htmlFor="password-register"
              className="position-relative w-100"
            >
              <span>Password</span>
              <input
                type="password"
                className="form-control"
                id="password-register"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label
              htmlFor="password-confirm-register"
              className="position-relative w-100"
            >
              <span>Password Confirm</span>
              <input
                type="password"
                className="form-control"
                id="password-confirm-register"
                placeholder="Password Confirm"
                onChange={(e) => setPasswordConfirm(e.target.value)}
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

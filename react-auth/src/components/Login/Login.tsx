import React, { SyntheticEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import Utilities from '../../utils/utilities';

export default function Login() {
  const utils = new Utilities();
  const year = utils.getYear();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    /* eslint-disable @typescript-eslint/no-unused-vars, no-empty */
    try {
      await axios.post('login', {
        email,
        password
      });
      setRedirect(true);
    } catch (error: any) {}
    /* eslint-enable */
  };

  useEffect(() => {}, [redirect]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

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

          <div>
            <label htmlFor="password-login" className="position-relative w-100">
              <span>Password</span>
              <input
                type="password"
                className="form-control"
                id="password-login"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <Link to="/forgot">Forgot password?</Link>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="my-3 text-body-secondary">&copy; {year}</p>
        </form>
      </main>
    </div>
  );
}

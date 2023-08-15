import React from 'react';
import Utilities from '../../utils/utilities';

export default function Login() {
  const utils = new Utilities();
  const year = utils.getYear();

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

          <div>
            <label htmlFor="email-login" className="position-relative w-100">
              <span>Email</span>
              <input
                type="email"
                className="form-control"
                id="email-login"
                placeholder="name@example.com"
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
              />
            </label>
          </div>

          <div className="form-check text-start my-3">
            <label className="form-check-label" htmlFor="remember-me-login">
              Remember me
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="remember-me-login"
              />
            </label>
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

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Utilities from '../../utils/utilities';

export default function App() {
  const utils = new Utilities();
  const year = utils.getYear();

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div>
            <label htmlFor="floatingInput" className="position-relative w-100">
              <span className="position-absolute indent-hide">Email</span>
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="floatingPassword"
              className="position-relative w-100"
            >
              <span className="position-absolute indent-hide">Password</span>
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
            </label>
          </div>

          <div className="form-check text-start my-3">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
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

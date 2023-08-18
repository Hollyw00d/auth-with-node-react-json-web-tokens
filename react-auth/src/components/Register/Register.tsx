import React, { SyntheticEvent, useState } from 'react';
import Utilities from '../../utils/utilities';

export default function Register() {
  const utils = new Utilities();
  const year = utils.getYear();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <div>
            <label
              htmlFor="firstname-register"
              className="position-relative w-100"
            >
              <span>First Name</span>
              <input
                type="text"
                className="form-control"
                id="firstname-register"
                placeholder="Jane"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="lastname-register"
              className="position-relative w-100"
            >
              <span>Last Name</span>
              <input
                type="text"
                className="form-control"
                id="lastname-register"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label htmlFor="email-register" className="position-relative w-100">
              <span>Email</span>
              <input
                type="email"
                className="form-control"
                id="email-register"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

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

          <button className="btn btn-primary w-100 py-2" type="submit">
            Submit
          </button>
          <p className="my-3 text-body-secondary">&copy; {year}</p>
        </form>
      </main>
    </div>
  );
}

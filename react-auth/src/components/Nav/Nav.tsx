import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAuth } from '../../redux/authSlice';

export default function Nav() {
  const auth = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();

  const logout = async () => {
    await axios.post('logout');
    dispatch(setAuth(false));
  };

  let links = null;

  if (auth) {
    links = (
      <Link to="/" className="btn btn-outline-light me-2" onClick={logout}>
        Logout
      </Link>
    );
  } else {
    links = (
      <>
        <Link to="/login" className="btn btn-outline-light me-2">
          Login
        </Link>
        <Link to="/register" className="btn btn-outline-light me-2">
          Register
        </Link>
      </>
    );
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
          </ul>
          <div className="text-end">{links}</div>
        </div>
      </div>
    </header>
  );
}

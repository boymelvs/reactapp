import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  
  let btn = <Link className="text-dark text-decoration-none" to='/'>Login</Link>;

  const userList = user.id ? 
    (
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          Users List
        </Link>
      </li>
    ) 
    : '';

  if(user.id){
    btn = (
      <button 
        className="btn btn-link text-dark text-decoration-none"
        onClick={ 
          () => {
            onLogout({});
            <Navigate to='/' replace />
          }
        }
      >
        Logout
      </button>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            { userList }
          </ul>
          <div>
            {btn}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

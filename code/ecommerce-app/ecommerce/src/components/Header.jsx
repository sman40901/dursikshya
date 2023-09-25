
import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth';


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink: href="#bootstrap" /></svg> */}
              <img src="" alt="" />
            </NavLink>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink href="#" className="nav-link px-2 text-secondary">Home</NavLink></li>
              <li><NavLink href="#" className="nav-link px-2 text-white">Features</NavLink></li>
              <li><NavLink href="#" className="nav-link px-2 text-white">Pricing</NavLink></li>
              <li><NavLink href="#" className="nav-link px-2 text-white">FAQs</NavLink></li>
              <li><NavLink href="#" className="nav-link px-2 text-white">About</NavLink></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end">
              {!isAuthenticated() &&
                <>
                  <NavLink to='/signin' type="button" className="btn btn-outline-light me-2">Login</NavLink>
                  <NavLink to='/register' type="button" className="btn btn-warning">Sign-up</NavLink>
                </>
              }
              {isAuthenticated() &&
                isAuthenticated.user.role === 1
                &&
                <>
                  <NavLink to='/admin/dashboard' type="button" className="btn btn-outline-light me-2">Admin</NavLink>
                </>
              }
              {isAuthenticated() &&
                isAuthenticated.user.role === 0
                &&
                <>
                  <NavLink to='/profile' type="button" className="btn btn-outline-light me-2">Profile</NavLink>

                </>
              }
              {isAuthenticated() &&
                <button className="btn btn-danger" onClick={() => signout(() => {
                  navigate('/signin');
                })}>LogOut</button>
              }
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

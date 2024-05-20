import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'


function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='sticky-top'>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${drawerOpen ? 'drawer-open' : 'drawer-closed'}`}>
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand ms-5">Hyna</NavLink>
          <button className="navbar-toggler" type="button" onClick={toggleDrawer}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${drawerOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto me-5 my-2 my-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={() => setDrawerOpen(false)}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link" onClick={() => setDrawerOpen(false)}>Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" onClick={() => setDrawerOpen(false)}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={() => setDrawerOpen(false)}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link" onClick={() => setDrawerOpen(false)}>Sign up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

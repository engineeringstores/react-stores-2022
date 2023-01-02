import React from 'react';
import './navbar.scss';
import { pages } from '../../util/pages';

import HorizontalLogo from '../../assets/logo/es-horizontal-logo.svg';
import SearchIcon from '../../assets/icons/magnifying-glass-solid.svg';

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <img className="navbar-logo" src={HorizontalLogo} />

        <div className="navbar-container-links">
          {pages.navbar.map((item) => {
            if (item.label == 'Search') {
              return (
                <div className="navbar-link-container" style={{ marginRight: 0 }}>
                  <img className="navbar-search" src={SearchIcon} />
                </div>
              );
            } else {
              return (
                <>
                  <div className="navbar-link-container">
                    <h3 className="navbar-link-text">{item.label.toUpperCase()}</h3>
                    <div className="navbar-underline"></div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export { Navbar };

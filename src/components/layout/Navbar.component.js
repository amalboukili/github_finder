import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { title, icon } = props;
  return (
    <header className="navbar">
      <section className="navbar-section">
        <a href="..." className="navbar-brand mr-2">
          <i className={icon}></i>{title}
          </a>
      </section>
      
      <section className="navbar-section">
        <a href="..." className="btn btn-link">Home</a>
        <a href="..." className="btn btn-link">About</a>
      </section>
    </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'GitHub finder',
  icon: 'fa fa-github',
};

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    Navbar Component
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;

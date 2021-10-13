import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Navbar as Nb, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <Nb bg="primary" variant="dark">
      <Container>
        <LinkContainer to='/'>

          <Nb.Brand href="#home">
            <span className={styles.title}>
              <span className={styles.titlememe}>Meme</span>
              <span className={styles.titlecoma}>.</span>
              <span className={styles.titlejs}>JS</span>
            </span>
          </Nb.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to='/Thumbnail'>
            <Nav.Link href="#">Thumbnail</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/Editor'>
            <Nav.Link href="#">Editor</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/Editor/0'>
            <Nav.Link href="#">Editor/0</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Nb>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About</Link>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here'
};

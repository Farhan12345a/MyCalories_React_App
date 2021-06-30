import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

//Can add more sections to navbar here
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">MyCalories</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Calorie Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Calorie Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about-macros" className="nav-link">Macro Information</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About Author</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

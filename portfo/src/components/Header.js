import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navigation({ currentPage, handlePageChange }) {
  return (

    <header className="bg-secondary mb-5 py-2 flex-row align-center">
      <div className="flex-row justify-space-between-lg justify-center align-center ">
        <Link to="/About">About Me </Link>
        <Link to="Contact">Contact</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Resume">Resume</Link>
      </div>
    </header>
  );
};

export default Navigation;
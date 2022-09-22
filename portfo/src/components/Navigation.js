import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="navigation">
      <li className="nav-list">
        <a href="#about"
          onClick={()=> handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >
          About Me
        </a>
      </li>
      <li className="nav-list">
        <a href="#Projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} >
          Projects
        </a>
      </li>
      <li className="nav-list">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-list">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
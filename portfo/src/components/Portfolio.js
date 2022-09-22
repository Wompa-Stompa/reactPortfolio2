import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Blog from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router} from 'react-router-dom';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Blog />;
    }
    if (currentPage ==='Contact') {
      return <Contact />;
    }
    return <Header/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
          <Footer />
      </div>
    </Router>
  );
}
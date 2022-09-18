import React from 'react';
import navigation from "../src/navigation.js";

function Header() {

  return (
    <header className="flex-row px-1">
      <div className="header">
        <h1>
        <Link to="/">Chris Broussard</Link>
        </h1>
      </div>
      <navigation></navigation>
    </header>
  );
}

export default Header;
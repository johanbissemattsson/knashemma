import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div className='site-header-container'>
    <header className='site-header'>
      <h1 className='site-title'><Link to='/'>Knas hemma</Link></h1>
    </header>
  </div>
)

export default Header;

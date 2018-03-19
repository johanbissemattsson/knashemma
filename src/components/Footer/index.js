import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <div className='site-footer-container'>
    <footer className='site-footer'>
      <div className='site-footer-sections'>
        <h2 className='site-footer-title'><Link to='/'>Knas hemma</Link></h2>
        <address className='site-footer-address'>
          <p>
            Anna Sabelström<br />
            Nationell Projektledare<br />
            070-946 66 43<br />
            <a href='mailto:anna@knashemma.se'>anna@knashemma.se</a>
          </p>
        </address>
        <div className='site-footer-social'>
            <ul>
              <li><a href='https://www.facebook.com/knashemma/'>Facebook</a></li>
              <li><a href='#'>Instagram</a></li>
            </ul> 
        </div>
      </div>
    </footer>
  </div>
)

export default Footer;

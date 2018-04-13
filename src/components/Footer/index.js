import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <div className='site-footer-container'>
    <footer className='site-footer'>
      <div className='footer-sections'>
        <h2 className='footer-title'><Link to='/'>Knas hemma</Link></h2>
        <div className='footer-contact'>
          <address className='footer-address'>
            <p>
              Anna Sabelström<br />
              Nationell Projektledare<br />
              <a href='tel:+46709466643'>070-946 66 43</a><br />
              <a href='mailto:anna@knashemma.se'>anna@knashemma.se</a>
            </p>
          </address>
          <div className='footer-social'>
            <ul>
              <li><a href='https://www.facebook.com/knashemma/'>Facebook</a></li>
              <li><a href='https://www.instagram.com/knashemma/'>Instagram</a></li>
            </ul> 
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer;

import React from 'react'
import Helmet from 'react-helmet';

const NotFoundPage = () => (
      <div className='page-container'>
        <Helmet title={title + 'Knas Hemma'} />
        <div className='page'>
          <h1>Sidan kunde inte hittas</h1>
          <p>Vi ber om ursäkt, men på den här adressen verkar det inte finnas någon sida.</p>
          <p>Det kan bero på:</p>
          <ul>
            <li>Att du klickat på en länk som inte fungerar.</li>
            <li>Att vi har tillfälliga tekniska problem.</li>
            <li>Att sidan du försökt nå är borttagen.</li>
          </ul>
        </div>
      </div>
)

export default NotFoundPage

import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';
import Instafeed from 'react-instafeed';

export default class InstagramFeed extends React.Component {

  shouldComponentUpdate() {
    return false;
  }
  
  render () {
    return (        
      <div className='instafeed-container'>
        <div id='instafeed'>
          <div id='instafeedtarget' />
          <Instafeed
            limit='4'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target='instafeedtarget'
            template={`<a href='#' class='instafeed__item'><img class='instafeed__item__background' src='{{image}}' /></a>`}
            userId='self'
            clientId='298ccf519e8647e69255af88314b9d41'
            accessToken='1580545576.298ccf5.87492f0b908f48aaabee433fa0061dce'
          />
        </div>
      </div>
    );
  }
}

/*            template={`<a href='{{link}}' target='_blank' class='instafeed__item'><img class='instafeed__item__background' src='{{image}}' /></a>`}*/

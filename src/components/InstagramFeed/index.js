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
            template={`<a href='{{link}}' target='_blank' class='instafeed__item'><img class='instafeed__item__background' src='{{image}}' /></a>`}
            userId='self'
            clientId='ccc66f7bacf34ace96812bf36bec48dd'
            accessToken='539167653.ccc66f7.56551ac67e534375bb415ea7c4cca64b'
          />
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { canUseDOM } from 'exenv';
import FacebookProvider, { Page } from 'react-facebook';

import InstagramFeed from '../InstagramFeed';

export default class SocialFeed extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.resizeTimer = null; 
    this.state = {
      sectionWidth: 384
    };
  }

  _updateDimensions = () => {
    clearTimeout(this.resizeTimer);

    this.resizeTime = setTimeout(() => {
      this.refSection && this.refSection.clientWidth >= 325 && this.setState({sectionWidth: this.refSection.clientWidth})  
    }, 250);
  }

  componentWillMount() {
    {canUseDOM &&
      this._updateDimensions();
    }
  }

  componentDidMount() {
    {canUseDOM &&
      window.addEventListener('resize', this._updateDimensions);
    }
  }

  componentWillUnmount() {
    {canUseDOM &&
      window.removeEventListener('resize', this._updateDimensions);
    }
  }

  render () {
    const { sectionWidth } = this.state;
    return (        
      <div className='social-feed'>
        <section ref={node => {this.refSection = node}}>
          <h3>Knas hemma på Facebook</h3>
          {canUseDOM &&
            <FacebookProvider appId='235952923808010' language='sv_SE'>
              <Page href='https://www.facebook.com/knashemma' tabs='timeline' smallHeader={true} width={sectionWidth} height={sectionWidth} showFacepile={false} className='social-feed-item' />
            </FacebookProvider>
          }
        </section>
        <section>
          <h3>Knas hemma på Instagram</h3>
          {canUseDOM &&
            <InstagramFeed />
          }
        </section>        
      </div>
    );
  }
}

import React, { Component } from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';
import { connect, dispatch} from 'react-redux';
import { canUseDOM } from 'exenv';
import Remark from 'remark';
import html from 'remark-html';

import { TOGGLE_IMAGESLIDERS } from '../../actionTypes';
import Footer from '../Footer';
import Content, { HTMLContent } from '../Content';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    const {imageSliders, dispatchToggleImageSliders} = this.props;
    imageSliders && dispatchToggleImageSliders();
    this.setState({menuOpen: state.isOpen});
  }

  closeMenu() {
    this.setState({menuOpen: false});
  }

  openMenu() {
    this.setState({menuOpen: true});
  }

  toggleMenu() {
    this.refSiteNavButton && this.refSiteNavButton.blur();
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render () {
    const PageContent = HTMLContent || Content;
    const convertMarkdownToHtml = ((markdownString) => Remark().use(html).processSync(markdownString.replace(/\\/g, '  '), ((err, file) => err ? {contents: '' } : file)).contents);
    console.log(this.props);
    return (        
      <div className='site-header-container'>
        <header className='site-header'>
          <Link to='/' onClick={() => this.closeMenu()}>
            <svg className='site-logo' width='120' height='50' viewBox='0 0 120 50'>
              <title>Knas hemma</title>
              <g>
                <path fill="#fff" d="M16.8,33.08a8.4,8.4,0,1,1-8.4-8.4,8.39,8.39,0,0,1,8.4,8.4" />
                <path fill="#abc2a6" d="M113.79,49.73a5.8,5.8,0,0,1-5.64-4.4l-1.5-6-6-1.5a5.84,5.84,0,0,1-4.23-4.23L95,27.69,89,26.19A5.83,5.83,0,0,1,84.77,22l-2.34-9.34A5.83,5.83,0,1,1,93.74,9.79l1.49,6,6,1.49a5.85,5.85,0,0,1,4.24,4.23l1.49,6,6,1.5a5.82,5.82,0,0,1,4.23,4.22l2.35,9.33a5.83,5.83,0,0,1-4.21,7.08,6,6,0,0,1-1.44.18" />
                <path fill="#000" d="M52.54,49.19a5.83,5.83,0,0,1-5.8-5.33c0-.23-1-9-7.4-13.61-4.62-3.35-11.3-4-19.87-2a5.82,5.82,0,0,1-2.66-11.34c12.08-2.81,22-1.45,29.48,4,10.83,7.92,12,21.44,12.06,22A5.84,5.84,0,0,1,53,49.18h-.46" />
                <path fill="#b017d4" d="M71.17,33.35a5.8,5.8,0,0,1,1.62-7.73c1.46-1.05,14.65-10,26.53-4.81a5.83,5.83,0,0,1-4.67,10.68c-5-2.18-12.79,2-15.14,3.64a5.83,5.83,0,0,1-8.1-1.42l-.24-.36" />
                <path fill="#29ffff" d="M32.39,49.73a5.83,5.83,0,0,1-5.64-4.4l-1.5-6-6-1.5a5.84,5.84,0,0,1-4.23-4.23l-1.49-5.95-6-1.5A5.81,5.81,0,0,1,3.39,22L1,12.62a5.82,5.82,0,1,1,11.3-2.83l1.5,6,5.95,1.49A5.84,5.84,0,0,1,24,21.47l1.5,6,5.94,1.5a5.81,5.81,0,0,1,4.23,4.22l2.36,9.33a5.82,5.82,0,0,1-4.22,7.08,5.92,5.92,0,0,1-1.44.18" />
                <path fill="#f0b840" d="M21.48,31.67a5.8,5.8,0,0,1-5.79-5.36c-.15-1.8-1-17.71,9.52-25.23A5.83,5.83,0,0,1,32,10.58c-4.43,3.15-4.87,12-4.66,14.85a5.86,5.86,0,0,1-5.4,6.23h-.43"/>
                <path fill="#2900ff" d="M89.42,50a5.74,5.74,0,0,1-3-.86c-22-13.44-24-40.59-24.08-41.74a5.82,5.82,0,0,1,5.42-6.18,5.65,5.65,0,0,1,6.21,5.41c0,.22,1.76,22.32,18.52,32.56a5.83,5.83,0,0,1-3,10.81" />
                <path fill="#29ff00" d="M75.06,33.08a8.4,8.4,0,1,1-8.39-8.4,8.38,8.38,0,0,1,8.39,8.4" />
              </g>
            </svg>
          </Link>
          <nav className='site-nav'>
            <button className={'nav-button hamburger hamburger--squeeze ' + (this.state.menuOpen ? 'is-active' : '')} type='button' aria-label='Menu' aria-controls='navigation' ref={node => this.refSiteNavButton = node} onClick={() => this.toggleMenu()}>
              <span className='hamburger-box'>
                <span className='hamburger-inner' />
              </span>
            </button>
            <div className={'site-nav-menu-container'} >
              <Menu styles={ styles } menuClassName={'site-nav-menu'} itemListClassName={'site-nav-menu-item-list'} width={'100%'} right isOpen={this.state.menuOpen} bodyClassName={'site-nav-menu-open'} customBurgerIcon={false} customCrossIcon={false} onStateChange={(state) => this.handleStateChange(state)}>
                {this.props.navItems && 
                  this.props.navItems.map((item, index) => {
                    return (
                      <Link key={index} to={'/' + item.link} className='menu-item' onClick={() => this.closeMenu()} onFocus={() => {!this.state.menuOpen && this.openMenu()}}>{item.title}</Link>
                    );
                  })
                }
                <div className='menu-footer'>
                  <div className='site-nav-menu-footer-container'>
                    <footer className='site-nav-menu-footer'>
                      {this.state.menuOpen &&
                        <div className='footer-sections'>
                            <h2 className='footer-title'><Link to='/'>Knas hemma</Link></h2>
                            <div className='footer-contact'>
                              <address className='footer-address'>
                              <PageContent className='side-item-content'  content={convertMarkdownToHtml(this.props.contact)}/>
                              </address>
                              <div className='footer-social'>
                                  <ul>
                                    <li><a href='https://www.facebook.com/knashemma/'>Facebook</a></li>
                                    <li><a href='https://www.instagram.com/knashemma/'>Instagram</a></li>
                                    <li><a href='https://www.twitter.com/knashemma/' onBlur={() => {this.closeMenu()}}>Twitter</a></li>
                                  </ul> 
                              </div>
                            </div>
                        </div>
                      }
                    </footer>
                  </div>
                </div>        
              </Menu>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
/*content={convertMarkdownToHtml(this.props.contact)}*/
const styles = {};

const mapStateToProps = state => ({
  imageSliders: state.imageSliders
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleImageSliders: () => dispatch({ type: TOGGLE_IMAGESLIDERS}),  
});

export default canUseDOM ? connect(mapStateToProps, mapDispatchToProps)(Header) : Header;
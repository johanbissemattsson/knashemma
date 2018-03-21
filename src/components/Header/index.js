import React, { Component } from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
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
    return (        
      <div className='site-header-container'>
        <header className='site-header'>
          <h1 className='site-title'><Link to='/' onClick={() => this.closeMenu()}>Knas hemma</Link></h1>
          <nav className='site-nav'>
            <button className={'nav-button hamburger hamburger--squeeze ' + (this.state.menuOpen ? 'is-active' : '')} type='button' aria-label='Menu' aria-controls='navigation' ref={node => this.refSiteNavButton = node} onClick={() => this.toggleMenu()}>
              <span className='hamburger-box'>
                <span className='hamburger-inner' />
              </span>
            </button>
            <div className={'site-nav-menu-container'} >
              <Menu width={'100%'} right isOpen={this.state.menuOpen} bodyClassName={'no-scroll'} customBurgerIcon={false} customCrossIcon={false} styles={styles} onStateChange={(state) => this.handleStateChange(state)}>
                <Link to='/page-2/' className='menu-item' onClick={() => this.closeMenu()} onFocus={() => {this.openMenu()}}>Om Knas Hemma</Link>
                <Link to='/page-2/' className='menu-item' onClick={() => this.closeMenu()}>Ambassadörer</Link>
                <Link to='/page-2/' className='menu-item' onClick={() => this.closeMenu()}>Delaktighet och rättigheter</Link>
                <Link to='/page-2/' className='menu-item' onClick={() => this.closeMenu()}>Engagera dig!</Link>
                <Link to='/page-2/' className='menu-item' onClick={() => this.closeMenu()}>Anlita Knas Hemma!</Link>
                <Link to='/page-2/' className='menu-item' onClick={() => this.closeMenu()}>Kontakt</Link>
                <Link to='/page-2/' className='menu-item' onClick={() => this.closeMenu()} onBlur={() => {this.closeMenu()}}>Knas hemma in English</Link>
              </Menu>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '24px',
    height: '24px',
    right: '16px',
    top: '16px',
  },
  bmOverlay:  {
    background: '#fa6efe',
    top: 0,
    left: 0,
    height: '100vh',
  },
  bmMenuWrap: {
    top: '0px',
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmCrossButton: {
    position: 'absolute',
    height: '24px',
    width: '24px',
    right: '16px',
    top: '16px',
  },
  bmCross: {
    background: 'white',
  },
  bmMenuWrap: {
    height: '100vh',
    top: 0
  },
  bmMenu: {
    overflow: 'hidden',
    maxWidth: '1080px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: '96px 0'
  },
  bmItemList: {
    color: '#b8b7ad',
    paddingLeft: '50%',
    height: 'initial'
  },

}

/*
          <a href='/page-2/' className='menu-item'>Om Knas Hemma</a>
          <a href='/page-2/' className='menu-item'>Ambassadörer</a>
          <a href='/page-2/' className='menu-item'>Delaktighet och rättigheter</a>
          <a href='/page-2/' className='menu-item'>Engagera dig!</a>
          <a href='/page-2/' className='menu-item'>Anlita Knas Hemma!</a>
          <a href='/page-2/' className='menu-item'>Kontakt</a>
          <a href='/page-2/' className='menu-item'>Knas hemma in English</a>
          */

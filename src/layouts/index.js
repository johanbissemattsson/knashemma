import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';

import Header from '../components/Header';
import Footer from '../components/Footer';

import 'normalize.css';
import './index.css';

export default class TemplateWrapper extends Component {
  componentWillMount() {
    if (canUseDOM) {
      const WebFont = require('webfontloader');
      
      WebFont.load({
        google: {
          families: ['Open Sans:300:700', 'Material Icons']
        }
      });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className='site-container'>
        <Helmet
          title="Knas Hemma – en ideell ungdomsförening som arbetar nationellt"
          meta={[
            { name: 'description', content: 'Knas hemma är en ideell ungdomsförening som arbetar nationellt. Den främsta målgruppen för Knas hemma är ungdomar och unga vuxna i åldrarna ca 13-30 år, som antingen bor i eller har bott i familjehem, HVB-hem, eller annat boende för samhällsplacerade barn eller unga.' },
            { name: 'keywords', content: 'knas, hemma, ideell, ungdomsföreing, nationell, ungdomar, ungdom, unga vuxna, familjehem, HVB-hem' },
          ]}
        />
        <Header />
        {children()}
        <Footer />
      </div>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};
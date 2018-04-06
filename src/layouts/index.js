import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from "styled-components";
import CalibreWebRegularEOT from "./fonts/CalibreWeb-Regular.eot";
import CalibreWebRegularWOFF from "./fonts/CalibreWeb-Regular.woff";
import CalibreWebRegularWOFF2 from "./fonts/CalibreWeb-Regular.woff2";
import CalibreWebSemiboldEOT from "./fonts/CalibreWeb-Semibold.eot";
import CalibreWebSemiboldWOFF from "./fonts/CalibreWeb-Semibold.woff";
import CalibreWebSemiboldWOFF2 from "./fonts/CalibreWeb-Semibold.woff2";

import Header from '../components/Header';
import Footer from '../components/Footer';
import 'normalize.css';
import './index.css';
import 'hamburgers/dist/hamburgers.css';
import 'slick-carousel/slick/slick.css';

injectGlobal`
  @font-face {
    font-family: 'Calibre Regular';
    font-style: normal;
    font-weight: 300;
    src: url(${CalibreWebRegularEOT});
    src: url(${CalibreWebRegularWOFF2}) format('woff2'),
      url(${CalibreWebRegularWOFF}) format('woff'),
  }
`

export default class TemplateWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='site-container'>
        <Helmet
          title="Knas Hemma"
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import 'normalize.css';
import './index.css';
import 'hamburgers/dist/hamburgers.css';
import 'slick-carousel/slick/slick.css';

export default class TemplateWrapper extends Component {
  render() {
    const { children, data} = this.props;
    return (
      <div className='site-container'>
        <Helmet
          title='Knas Hemma'
          meta={data.seo.frontmatter.metaInformation && [
            { name: 'description', content: data.seo.frontmatter.metaInformation.metaDescription && 'Knas hemma är en ideell ungdomsförening som arbetar nationellt. Den främsta målgruppen för Knas hemma är ungdomar och unga vuxna i åldrarna ca 13-30 år, som antingen bor i eller har bott i familjehem, HVB-hem, eller annat boende för samhällsplacerade barn eller unga.'},
            { name: 'keywords', content: data.seo.frontmatter.metaInformation.metaKeywords && 'knas, hemma, ideell, ungdomsföreing, nationell, ungdomar, ungdom, unga vuxna, familjehem, HVB-hem' },
          ]}
        />
        <Header navItems={data.nav.frontmatter.navMenu}/>
        {children()}
        <Footer content={data.footer}/>
      </div>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

/*    seo: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        metaInformation {
          metaDescription
          metaKeywords
        }
      }
    },
  */
export const allQuery = graphql`
  query AllQuery {
    footer: markdownRemark(frontmatter: {templateKey: {eq: "settings-footer"}}) {
      html
    },
    nav: markdownRemark(frontmatter: {templateKey: {eq: "settings-navigation"}}) {
      frontmatter {
        navMenu {
          link
          title
        }
      }
    },

  }
`
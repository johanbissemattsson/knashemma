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
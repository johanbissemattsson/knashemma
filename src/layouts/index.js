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
          meta={data.seo && data.seo.frontmatter.metaInformation && [
            { name: 'description', content: data.seo.frontmatter.metaInformation.metaDescription },
            { name: 'keywords', content: data.seo.frontmatter.metaInformation.metaKeywords}
          ]}
        />
        <Header navItems={data.nav.frontmatter.navMenu} contact={data.footer.frontmatter.navcontact}/>
        {children()}
        <Footer content={data.footer}/>
      </div>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export const allQuery = graphql`
  query AllQuery {
    seo: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        metaInformation {
          metaDescription
          metaKeywords
        }
      }
    },
    footer: markdownRemark(frontmatter: {templateKey: {eq: "settings-footer"}}) {
      frontmatter {
        title
        navcontact
      }
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
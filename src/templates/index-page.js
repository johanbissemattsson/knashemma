import React from 'react';
import Link from 'gatsby-link';
import Remark from 'remark';
import html from 'remark-html';

import ImageSlider from '../components/ImageSlider';
import SocialFeed from '../components/SocialFeed';
import Content, { HTMLContent } from '../components/Content';

export const IndexPageTemplate = ( { content, contentComponent, title, sections, imageSlider, footerImage }) => {
  const PageContent = contentComponent || Content;
  const convertMarkdownToHtml = ((markdownString) => Remark().use(html).processSync(markdownString.replace(/\\/g, '  '), ((err, file) => err ? {contents: '' } : file)).contents);

  return (
    <div className='page-container'>
      <article className='index page'>
        <ImageSlider images={imageSlider}/>
        <div className='page-sections'>
          {sections && sections.map((section, index) => 
            <section key={index}>
              <header className='section-header'>
                {section.sectionLink ? 
                  <Link to={section.sectionLink}>
                    {section.sectionFeaturedImage && <img src={section.sectionFeaturedImage} alt={section.sectionHeader} />}
                    <h3>{section.sectionHeader}</h3>
                  </Link>
                :
                  <div>
                    {section.sectionFeaturedImage && <img src={section.sectionFeaturedImage} alt={section.sectionHeader} />}
                    <h3>{section.sectionHeader}</h3>
                  </div>
                }
              </header>
              <PageContent content={convertMarkdownToHtml(section.sectionBody)} />
            </section>
          )}
        </div>
        {footerImage &&
          <div className='footer-image'>
            <img src={footerImage.footerImageSrc} alt={footerImage.footerImageAlt}/>
          </div>
        }
        <SocialFeed />
      </article>
    </div>    
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <IndexPageTemplate
      title={post.frontmatter.title}
      sections={post.frontmatter.sections}
      content={post.html}
      imageSlider={post.frontmatter.imageSlider}
      footerImage={post.frontmatter.footerImage}
      contentComponent={HTMLContent}
    />
  );
}

export const IndexPageQuery = graphql`
  query IndexPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        imageSlider {
          imageSliderImage
          imageSliderImageAlt
          imageSliderImageLink
        }
        sections {
          sectionHeader
          sectionLink
          sectionBody
          sectionFeaturedImage
        }
        footerImage {
          footerImageSrc
          footerImageAlt
        }
      }
    }
  }
`

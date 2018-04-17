import React from 'react';
import Img from "gatsby-image";
import Remark from 'remark';
import html from 'remark-html';
import Helmet from 'react-helmet';

import ImageSlider from '../components/ImageSlider';

import Content, { HTMLContent } from '../components/Content';

export const PageTemplate = ({ title, content, contentComponent, sideItems, imageSlider, metaInformation }) => {
  const PageContent = contentComponent || Content;
  const convertMarkdownToHtml = ((markdownString) => Remark().use(html).processSync(markdownString.replace(/\\/g, '  '), ((err, file) => err ? {contents: '' } : file)).contents);
    return (
    <div className='page-container'>
      {metaInformation && metaInformation.metaDescription && metaInformation.metaDescription.length && metaInformation.metaKeywords && metaInformation.metaKeywords.length ? 
        <Helmet
        title={title + ' | Knas Hemma'}
        meta={[
            { name: 'description', content: metaInformation.metaDescription },
            { name: 'keywords', content: metaInformation.metaKeywords }
          ]}        
      />
      :
        <Helmet title={title + ' | Knas Hemma'} /> 
      }
      <article className='page'>
        {imageSlider && <ImageSlider images={imageSlider}/>}
          <div className='content'>
            {content && 
            <main>
              <PageContent className='main-content' content={convertMarkdownToHtml(content)} />
            </main>
            }
            {sideItems && 
              <aside>
                {sideItems.map((item, index) => {
                  const backgroundColor = item.sideItemBackgroundColor ? item.sideItemBackgroundColor : null;
                  const sideItemBody = item.sideItemBody;
                  if (item.sideItemImage) {
                    return (
                    <div key={index} className={'side-item-image-container'}>
                      <img src={item.sideItemImage} alt='' />
                    </div>
                    );
                  } else {
                  return (
                  <div key={index} className={'side-item-container ' + (backgroundColor && (backgroundColor === '#000' || backgroundColor === '#2800ff' || backgroundColor === '#b017d3') ? 'inverted' : '')} style={{backgroundColor: backgroundColor ? backgroundColor : '#28ffff'}}>
                    <PageContent className='side-item-content' content={convertMarkdownToHtml(sideItemBody)} />
                  </div>
                  )}}

                )}
              </aside>
            }
          </div>
      </article>
    </div>
  );
}

export default ({ data }) => {
  const { markdownRemark: page, fields, content} = data;
  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      content={page.html}
      sideItems={page.frontmatter.sideItems}
      imageSlider={page.frontmatter.imageSlider}
      metaInformation={page.frontmatter.metaInformation}
    />
  );
}

export const PageQuery = graphql`
  query PageQuery($id: String!) { 
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug,
        sideImages {
          relativePath
          absolutePath
          id
        }
      }
      html
      frontmatter {
        title
        imageSlider {
          imageSliderImage
          imageSliderImageAlt
          imageSliderImageLink
        }
        sideItems {
          sideItemBody
          sideItemBackgroundColor
          sideItemImage
        }
        metaInformation {
          metaDescription
          metaKeywords
        }
      }
    }
  }
`




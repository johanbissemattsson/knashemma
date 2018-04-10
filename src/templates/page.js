import React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from "gatsby-image";

import Content, { HTMLContent } from '../components/Content';

export const PageTemplate = ({ title, content, contentComponent, sideItems, mainBody, sideItemImages }) => {
  const PageContent = contentComponent || Content;
    return (
    <div className='page-container'>
      <article className='page'>
          <div className='content'>
            {mainBody && 
              <main>
                <ReactMarkdown source={mainBody.replace(/\\/g, '  ')} className='main-content'/>
              </main>
            }
            {sideItems && 
              <aside>
                {sideItems.map((item, index) => {
                  const backgroundColor = item.sideItemBackgroundColor ? item.sideItemBackgroundColor : null;
                  const sideItemBody = item.sideItemBody;

                  if (item.sideItemImageSizes) {
                    //<Img sizes={sideImages.sizes} alt='glöeamgekgmakg'/>
                    return (
                    <div key={index} className={'side-item-image-container'}>
                      <Img sizes={item.sideItemImageSizes} alt='glöeamgekgmakg'/>
                    </div>
                    );
                  } else {
                  return (
                  <div key={index} className={'side-item-container ' + (backgroundColor && (backgroundColor === '#000' || backgroundColor === '#2800ff' || backgroundColor === '#b017d3') ? 'inverted' : '')} style={{backgroundColor: backgroundColor ? backgroundColor : '#28ffff'}}>
                    <ReactMarkdown className='side-item-content' source={sideItemBody} />
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
  const { markdownRemark: page, allFile, fields} = data;
  const sideItemImages = new Array();

  if (page.fields && page.fields.sideImages && page.fields.sideImages.length) {
    page.fields.sideImages.map((sideImage, index) => {
      const sharp = allFile.edges.find((af) => {
        if (af.node.childImageSharp && af.node.childImageSharp.id === sideImage.id) {
          return af.node.childImageSharp;
        }
      });
      sharp && sideItemImages.push({absolutePath: sideImage.absolutePath, relativePath: sideImage.relativePath, id: sideImage.id, sizes: sharp.node.childImageSharp.sizes});
    });
  };
  
  let sideItemsWithImages = new Array();
  if ( page.frontmatter.sideItems && sideItemImages) {
     page.frontmatter.sideItems.map((item, index) => {
      const imageSizes = sideItemImages.find((ef) => {
        if (ef.relativePath === item.sideItemImage) {
          console.log(item);
          sideItemsWithImages.push({sideItemBackgroundColor: item.sideItemBackgroundColor, sideItemBody: item.sideItemBody, sideItemImageSizes: ef.sizes});
        }
      });
    })

  }

  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      content={page.frontmatter.mainBody}
      mainBody={page.frontmatter.mainBody}
      sideItems={sideItemsWithImages}
      sideItemImages={sideItemImages}
    />
  );
}

export const PageQuery = graphql`
  query PageQuery($id: String!) {
    allFile {
      edges {
        node {
          id
          childImageSharp {
            id
            sizes {
              srcSet
              aspectRatio
              base64
              src
            }
          }
        }
      }
    }
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
      frontmatter {
        title
        mainBody
        sideItems {
          sideItemBody
          sideItemBackgroundColor
          sideItemImage
        }
      }
    }
  }
`




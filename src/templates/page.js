import React from 'react';
import Img from "gatsby-image";
import Remark from 'remark';
import html from 'remark-html';

import Content, { HTMLContent } from '../components/Content';

export const PageTemplate = ({ title, content, contentComponent, sideItems, mainBody }) => {
  const PageContent = contentComponent || Content;
  const convertMarkdownToHtml = ((markdownString) => Remark().use(html).processSync(markdownString.replace(/\\/g, '  '), ((err, file) => err ? {contents: '' } : file)).contents);

    return (
    <div className='page-container'>
      <article className='page'>
          <div className='content'>
            {mainBody && 
              <main>
                <PageContent className='main-content' content={convertMarkdownToHtml(mainBody)} />
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

/*className={'nav-button hamburger hamburger--squeeze ' + (this.state.menuOpen ? 'is-active' : '')}*/

export default ({ data }) => {
  const { markdownRemark: page, allFile, fields} = data;
  console.log(data);
  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      content={page.frontmatter.mainBody}
      mainBody={page.frontmatter.mainBody}
      sideItems={page.frontmatter.sideItems}
    />
  );
}

export const PageQuery = graphql`
  query PageQuery($id: String!) {
    allFile {
      edges {
        node {
          id
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          sizes {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
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




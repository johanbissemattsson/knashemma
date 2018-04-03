import React from 'react';
import ReactMarkdown from 'react-markdown';

import Content, { HTMLContent } from '../components/Content';

export const PageTemplate = ({ title, content, contentComponent, sideItems, mainBody }) => {
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
                  if (item.sideItemImage) {
                    //console.log(item.sideItemImage);
                    return (
                    <div key={index} className={'side-item-image-container'}>
                      <img src={item.sideItemImage} />
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

/*className={'nav-button hamburger hamburger--squeeze ' + (this.state.menuOpen ? 'is-active' : '')}*/

export default ({ data }) => {
  const { markdownRemark: page, allImageSharp} = data;
  console.warn(allImageSharp);
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
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
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
    file {
      childImageSharp {
        id
      }
    }
  }
`

import React from 'react';
import ReactMarkdown from 'react-markdown';

import Content, { HTMLContent } from '../components/Content';

export const PageTemplate = ({ title, content, contentComponent, sideItems }) => {
  const PageContent = contentComponent || Content;
  console.log('sideite:', sideItems);
    return (
    <div className='page-container'>
      <article className='page'>
          <div className='content'>
            {content && 
              <main>
                <ReactMarkdown source={content.replace(/\\/g, '  ')} className='main-content'/>
              </main>
            }
            {sideItems && 
              <aside>
                {sideItems.map((item, index) => {
                  const backgroundColor = item.sideItemBackgroundColor ? item.sideItemBackgroundColor : null;
                  return (
                  <div className={'side-item-container ' + (backgroundColor && (backgroundColor === '#000' || backgroundColor === '#2800ff' || backgroundColor === '#b017d3') && 'inverted')} style={{backgroundColor: backgroundColor ? backgroundColor : '#28ffff'}}>
                    <ReactMarkdown key={index} className='side-item-content' source={item.sideItemBody.replace(/\\/g, '  ')} />
                  </div>
                  )}
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
  const { markdownRemark: page } = data;
  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={page.frontmatter.title}
      content={page.frontmatter.mainBody}
      sideItems={page.frontmatter.sideItems}
    />
  );
}

export const PageQuery = graphql`
  query PageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainBody
        sideItems {
          sideItemBody
          sideItemBackgroundColor
        }
      }
    }
  }
`

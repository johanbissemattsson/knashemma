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
                <ReactMarkdown source={content.replace(/\\/, '  ')} className='main-content'/>
              </main>
            }
            {sideItems && 
              <aside>
                {sideItems.map((item, index) => 
                  <div className='side-item-container' style={{backgroundColor: item.sideItemBackgroundColor ? item.sideItemBackgroundColor : '#28ffff'}}>
                    <ReactMarkdown key={index} source={item.sideItemBody.replace(/\\/, '  ')} />
                  </div>
                )}
              </aside>
            }
          </div>
      </article>
    </div>
  );
}

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
        }
      }
    }
  }
`

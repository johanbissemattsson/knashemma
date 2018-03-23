import React from 'react';
import Content, { HTMLContent } from '../components/Content';

export const PageTemplate = ({ title, content, contentComponent, main, side }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className='page-container'>
    <article className='page'>
      <div className='page-sections'>
        <section>
          <h2>{title}</h2>
          <PageContent className="content" content={main} />
        </section>
        <section>
          {side}
        </section>
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
      main={page.html}
      side={page.frontmatter.side}
    />
  );
}

export const PageQuery = graphql`
  query PageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        main
        side
      }
    }
  }
`

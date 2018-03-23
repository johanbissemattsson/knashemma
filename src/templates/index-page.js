import React from 'react';
import Link from 'gatsby-link';
import ImageSlider from '../components/ImageSlider';
import Content, { HTMLContent } from '../components/Content';


export const IndexPageTemplate = () => {
  return (
    <p>hej</p>
  );
}

export default IndexPageTemplate;


/*
export const IndexPageTemplate = ({ title, content, contentComponent, section1, section2, section3, section4 }) => {
  const PageContent = contentComponent || Content;
  return (
    <div className='page-container'>
      <article className='index page'>
        <ImageSlider />
        <div className='page-sections'>
        <section>
            <header className='section-header'>
              <Link to="/om-knas-hemma/">
                <img src='' width='120' height='100' alt='hej' />
                <h3>{section1.title}</h3>
              </Link>
            </header>
            <div className='section-content'>
              {section1.description}
            </div>
          </section>
          <section>
            <header className='section-header'>
              <Link to="/om-knas-hemma/">
                <img src='' width='120' height='100' alt='hej' />
                <h3>{section2.title}</h3>
              </Link>
            </header>
            <div className='section-content'>
              {section2.description}
            </div>
          </section>
          <section>
            <header className='section-header'>
              <Link to="/om-knas-hemma/">
                <img src='' width='120' height='100' alt='hej' />
                <h3>{section3.title}</h3>
              </Link>
            </header>
            <div className='section-content'>
              {section3.description}
            </div>
          </section>
          <section>
            <header className='section-header'>
              <Link to="/om-knas-hemma/">
                <img src='' width='120' height='100' alt='hej' />
                <h3>{section4.title}</h3>
              </Link>
            </header>
            <div className='section-content'>
              {section4.description}
            </div>
          </section>                              
        </div>
      </article>
    </div>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      section1={post.frontmatter.section1}
      section2={post.frontmatter.section2}
      section3={post.frontmatter.section3}
      section4={post.frontmatter.section4}
      content={post.html}
    />
  );
}

export const IndexPageQuery = graphql`
  query IndexPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        section1 {
          title
          description
        }
        section2 {
          title
          description
        }
        section3 {
          title
          description
        }
        section4 {
          title
          description
        }        
      }
    }
  }
`
*/
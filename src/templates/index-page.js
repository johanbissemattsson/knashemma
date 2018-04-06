import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

import ImageSlider from '../components/ImageSlider';

export const IndexPageTemplate = ( {title, sections }) => {
  return (
    <div className='page-container'>
      <article className='index page'>
        <ImageSlider />
        <div className='page-sections'>
          {sections && sections.map((section, index) => 
            <section key={index}>
              <header className='section-header'>
                {section.sectionLink ? 
                  <Link to={section.sectionLink}>
                    <img src={'/media/uploads/Startsidebild0' + (index + 1) + '.jpg'} width='251' height='183' alt={section.sectionHeader} />
                    <h3>{section.sectionHeader}</h3>
                  </Link>
                :
                  <div>
                    <img src='/media/uploads/Startsidebild01.jpg' width='251' height='183' alt='hej' />
                    <h3>{section.sectionHeader}</h3>
                  </div>
                }
              </header>
              <ReactMarkdown source={section.sectionBody.replace(/\\/g, '  ')} />
            </section>
          )}
        </div>
        <div className='footer-image'>
          <img src='/media/uploads/FooterImage.png' alt='Footer image'/>
        </div>
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
    />
  );
}

export const IndexPageQuery = graphql`
  query IndexPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        sections {
          sectionHeader
          sectionLink
          sectionBody
        }
      }
    }
  }
`

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
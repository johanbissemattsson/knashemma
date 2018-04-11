import React from 'react';

export const FooterSettingsTemplate = ({id}) => {
    return (
    <div className='page-container'>
        <p>Hejhejhej</p>
    </div>
  );
}

export default ({ data }) => {
  const { markdownRemark: footerSettings} = data;
  
  return (
    <FooterSettingsTemplate id={footerSettings.id} />
  );
}

export const FooterSettingsQuery = graphql`
  query FooterSettings($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        social
      }
      fields {
        slug
      }
    }
  }
`




import React from 'react';
import NotFoundPage from '../pages/404';

export const FooterSettingsTemplate = ({id}) => {
  return (
    <NotFoundPage />
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
        title
        navcontact
      }
      fields {
        slug
      }
    }
  }
`


import React from 'react';
import NotFoundPage from '../pages/404';

export const SeoSettingsTemplate = ({id}) => {
  return (
    <NotFoundPage />
  );
}

export default ({ data }) => {
  const { markdownRemark: seoSettings} = data;
  
  return (
    <SeoSettingsTemplate id={seoSettings.id} />
  );
}

export const SeoSettingsQuery = graphql`
  query SeoSettings($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        keywords
      }
      fields {
        slug
      }
    }
  }
`
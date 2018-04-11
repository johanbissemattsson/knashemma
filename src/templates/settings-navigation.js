import React from 'react';

export const NavigationSettingsTemplate = ({id}) => {
  return (
    <div className='page-container'>
        <p>Hejhejhej</p>
    </div>
  );
}

export default ({ data }) => {
  const { markdownRemark: navSettings} = data;
  
  return (
    <NavigationSettingsTemplate id={navSettings.id} />
  );
}

export const NavigationSettingsQuery = graphql`
  query NavigationSettings($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        navMenu {
          navMenuItem
        }
      }
      fields {
        slug
      }
    }
  }
`




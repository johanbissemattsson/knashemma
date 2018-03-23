import React from 'react';
import { PageTemplate } from '../../templates/page';

const PagePreview = ({ entry, widgetFor }) => (
  <PageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

export default PagePreview;

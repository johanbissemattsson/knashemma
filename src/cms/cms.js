import CMS from 'netlify-cms';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import PagePreview from './preview-templates/PagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('page', PagePreview);
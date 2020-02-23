import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectPreview from './preview-templates/Project'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)


CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)

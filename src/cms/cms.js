import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'


import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProjectPreview from './preview-templates/ProjectPreview'

CMS.registerMediaLibrary(uploadcare)



CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('project', ProjectPreview)

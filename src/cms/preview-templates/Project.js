//jshint esversion: 6
import React from 'react'
import PropTypes from 'prop-types'
import { ProjectTemplate } from '../../templates/project'

const ProjectPreview = ({ entry, widgetFor, getAsset }) => (
  <ProjectTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    featuredimage={getAsset(entry.getIn(['data', 'featuredimage', 'image']))}
    additionalimage={ getAsset(entry.getIn(['data', 'additionalimage', 'src']))}

  />
)

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func
}

export default ProjectPreview




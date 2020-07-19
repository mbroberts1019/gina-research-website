//jshint esversion: 6
import React from 'react'
import PropTypes from 'prop-types'
import { ProjectTemplate } from '../../templates/project'

const ProjectPreview = ({ entry, widgetFor, getAsset, widgetsFor }) => {
  console.log(entry.getIn(['data', 'sections']))

  const entrySections = entry.getIn(['data', 'sections'])
  const sections = entrySections ? entrySections.toJS() : []

  const entryFeaturedImage = entry.getIn(['data', 'featuredimage'])
  console.log("Template : " + entryFeaturedImage)

  return (
  <div>
    <div style={{display: "flex", flexDirection: "row", alignContent: "center"}}>
      <img src= {entryFeaturedImage.toString()} style={{maxHieght: '20vh', maxWidth: "20vw", margin: "auto"}}/> 
    </div>
  <ProjectTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    featuredimage={getAsset(entry.getIn(['data', 'featuredimage']))}
    sections={sections}
  />
  </div>
)}

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
  getAsset: PropTypes.func
}

export default ProjectPreview




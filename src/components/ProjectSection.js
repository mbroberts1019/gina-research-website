import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'

const ProjectSection = ({sectionInfo, index}) => {

    if (sectionInfo.sectionimage && sectionInfo.sectionimage.rightjustify) {
    return (
        <div key={index} className="project-section columns is-vcentered">
          <div className="column">
            <ReactMarkdown source={sectionInfo.text} />
          </div>
          <div className="project-section-image-container margin-top-0 column is-4"> 
             <div className="project-section-image">
              <Img 
              fluid={!!sectionInfo.sectionimage.image.childImageSharp ? sectionInfo.sectionimage.image.childImageSharp.fluid : sectionInfo.sectionimage.image}
              />
              </div>
              <p>{sectionInfo.sectionimage.description}</p>
          </div>
        </div>
      )
    } else if (sectionInfo.sectionimage && sectionInfo.sectionimage.leftjustify) {
      return (
        <div key={index} className="project-section columns is-vcentered">
          <div className="project-section-image-container margin-top-0 column is-4"> 
             <div className="project-section-image">
              <Img 
              fluid={!!sectionInfo.sectionimage.image.childImageSharp ? sectionInfo.sectionimage.image.childImageSharp.fluid : sectionInfo.sectionimage.image}
              />
              </div>
              <p>{sectionInfo.sectionimage.description}</p>
          </div>
          <div className="column">
            <ReactMarkdown source={sectionInfo.text} />
          </div>
        </div>)
    } else if(sectionInfo.sectionimage){
      return (
        <div key={index} className="project-section column is-12 is-vcentered">
          <div className="project-section-image-container margin-top-0 column is-4"> 
              <Img 
              fluid={!!sectionInfo.sectionimage.image.childImageSharp ? sectionInfo.sectionimage.image.childImageSharp.fluid : sectionInfo.sectionimage.image}
              />
              <p>{sectionInfo.sectionimage.description}</p>
          </div>
          <div className="column is-12 is-vcentered">
            <ReactMarkdown source={sectionInfo.text} />
          </div>
        </div>)
    }else {
      return (
        <div key={index} className="project-section ">
          <ReactMarkdown source={sectionInfo.text} />
        </div>
      )
    }
}

ProjectSection.propTypes = {
    sectionInfo: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
  }
  
export default ProjectSection  

import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  let imageStyle = { borderRadius: '5px' , height: "8rem", width:"8rem"}
  const { childImageSharp, image, preferredImageStyle } = imageInfo

  if(preferredImageStyle){imageStyle = preferredImageStyle}

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid}  />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image}  />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    preferredImageStyle: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage

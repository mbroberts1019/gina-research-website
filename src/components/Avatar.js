import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'

const Avatar = () => {
  const imageStyle = { borderRadius: '50%' , height : "100%" , width: "100%" }
  
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: {regex: "/home-content/"}) {
          frontmatter {
            featuredimage {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              } 
          }
        }
      }
    `
  )

  return (
    <div className="home-avatar-container">
    {markdownRemark.frontmatter.featuredimage ? (
                    <div className="home-banner-tile-avatar row is-1">
                      <Img
                        fluid={markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
                        className = "home-avatar-image"
                      />
                    </div>
                  ) : null} 
    </div>
  )}

  
export default Avatar
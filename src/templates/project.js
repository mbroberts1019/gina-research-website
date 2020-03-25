import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  featuredimage,
  additionalimage
}) => {
  const ProjectContent = contentComponent || Content
    console.log(featuredimage)
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
                !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
              })`,
          }}>

            </div>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <ProjectContent content={content} />
            <div className="half-width-image"
            style={{
              backgroundImage: `url(${
                  !!additionalimage.childImageSharp ? additionalimage.childImageSharp.fluid.src : additionalimage
                })`,
            }}>
            
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  additionalimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

const Project = ({ data }) => {
  const { markdownRemark: project } = data

  return (
    <Layout>
      <ProjectTemplate
        content={project.html}
        contentComponent={HTMLContent}
        description={project.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Project">
            <title>{`${project.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${project.frontmatter.description}`}
            />
          </Helmet>
        }
        title={project.frontmatter.title}
        featuredimage={project.frontmatter.featuredimage}
        additionalimage={project.frontmatter.additionalimage}
      />
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}





export default Project

export const pageQuery = graphql`
  query ProjectByID2($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        templateKey
        additionalimage{
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        featuredimage{
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        featuredproject
        description
      }
      rawMarkdownBody
    }
  }
`
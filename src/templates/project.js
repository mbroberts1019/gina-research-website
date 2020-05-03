import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ProjectSection from '../components/ProjectSection'


export const ProjectTemplate = ({
  description,
  title,
  helmet,
  featuredimage,
  additionalimage,
  sections,
  funding,
  contributors
}) => {
  
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column project-main">
            <div className="project-banner">
              <div className="project-banner-image-container margin-top-0">
                <PreviewCompatibleImage imageInfo={featuredimage}/>
              </div>
              <div className='project-banner-text'>
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <h3>{description}</h3>
              </div>
            </div>
            <div className='project-main'>
              {sections ? sections.map((section, index) => {
                  return (
                    <ProjectSection sectionInfo={section} index={index}/>
                  )      
              }) : null}
            </div>
          </div>

          {(funding || contributors) && <div className='project-sidebar column is-1'>
            <div className="project-sidebar-title">Funded by:</div>
            {funding ? funding.map((funder, index) => {
              return (
                <div key={index} className='project-funder'>
                  <div className="project-funder-image-container margin-top-0">
                      <div className="project-funder-image">
                      <PreviewCompatibleImage imageInfo={funder.funderimage}/>
                      </div>
                      <div className="project-sidebar-name">
                        {funder.website ? 
                        <a href={funder.website}>{funder.name}</a> :
                        <p>{funder.name}</p>}
                      </div>
                  </div>
                  

                </div>
              )
            }) : null}
            <div className="project-sidebar-title">Collaborators:</div>
            {contributors ? contributors.map((contributor, index) => {
              return (
                <div key={index} className='project-funder'>
                  <div className="project-contributor-image-container margin-top-0">
                      <div className="project-contributor-image">
                      <PreviewCompatibleImage imageInfo={{image: contributor.avatar, style: {borderRadius: "50%"}}} style={{"border-radius": "50%"}}/>
                      </div>
                    </div>
                  <div className="project-sidebar-name">
                        {contributor.website ? 
                        <a href={contributor.website}>{contributor.name}</a> :
                        <p>{contributor.name}</p>}
                      </div>

                </div>
              )
            }) : null}
          </div>}
        </div>
      </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  sections: PropTypes.array,
  funding: PropTypes.array,
  contributors: PropTypes.array
}

const Project = ({ data }) => {
  const { markdownRemark: project } = data

  return (
    <Layout>
      <ProjectTemplate
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
        sections={project.frontmatter.sections}
        funding={project.frontmatter.funding}
        contributors={project.frontmatter.contributors}
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
        featuredimage{
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
               ...GatsbyImageSharpFluid
            }
          }
        } 
        featuredproject
        description
        sections{
          text
          sectionimage {
            alt
            description
            rightjustify
            leftjustify
            image {
              childImageSharp{
                fluid(maxWidth: 2048, quality: 100) {
                   ...GatsbyImageSharpFluid
                }  
              }
            }
          }
        }
        funding {
          name
          website
          funderimage {
            childImageSharp{
              fluid(maxWidth: 2048, quality: 100) {
                 ...GatsbyImageSharpFluid
              }   
            }
          }
        }
        contributors {
          name
          website
          avatar {
            childImageSharp{
              fluid(maxWidth: 2048, quality: 100) {
                 ...GatsbyImageSharpFluid
              }
            }   
          }
        }
      }
      rawMarkdownBody
    }
  }
`
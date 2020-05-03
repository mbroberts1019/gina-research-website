import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ProjectSection from '../components/ProjectSection'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  featuredimage,
  additionalimage,
  sections,
  funding,
  contributors
}) => {
  // const ProjectContent = contentComponent || Content
  // console.log(ProjectContent)


  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column project-main">
            <div className="project-banner">
              <div className="project-banner-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${
                    !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
                    })`,
                }}>
              </div>
              <div className='project-banner-text'>
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <h3>{description}</h3>
              </div>
            </div>
            <div className='project-main'>
              {/* <ProjectContent content={content} /> */}
              {sections ? sections.map((section, index) => {
                  return (
                    <ProjectSection sectionInfo={section} index={index}/>
                  )      
              }) : null}
            </div>
          </div>

          {(funding || contributors) && <div className='project-sidebar column is-2'>
            <div className="project-sidebar-title">Funded by:</div>
            {funding ? funding.map((funder, index) => {
              return (
                <div key={index} className='project-funder'>
                  <div className="project-funder-image-container margin-top-0"
                    style={{
                      backgroundImage: `url(${
                        !!funder.funderimage.childImageSharp ? funder.funderimage.childImageSharp.fluid.src : funder.funderimage.image
                        })`,
                    }}></div>
                  <div className="project-sidebar-name">{funder.name}</div>

                </div>
              )
            }) : null}
            <div className="project-sidebar-title">Collaborators:</div>
            {contributors ? contributors.map((contributor, index) => {
              return (
                <div key={index} className='project-funder'>
                  <div className="project-contributor-image-container margin-top-0"
                    style={{
                      backgroundImage: `url(${
                        !!contributor.avatar.childImageSharp ? contributor.avatar.childImageSharp.fluid.src : contributor.avatar.image
                        })`,
                    }}></div>
                  <div className="project-sidebar-name">{contributor.name}</div>

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
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
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
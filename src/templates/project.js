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
  additionalimage,
  sections
}) => {
  const ProjectContent = contentComponent || Content
  const SectionContent = contentComponent || Content

  console.log(featuredimage)
  console.log(sections)
  console.log(content)
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
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
                <h4>{description}</h4>
              </div>
            </div>
            <ProjectContent content={sections[0].text} />
            
            {sections.map((section, index)=>{
              console.log(section.sectionimage)
              if (section.sectionimage){
                return (
                
                  <div key= {index}>
                  <SectionContent content={section.text}/>
                
                  <div className="project-banner-image-container margin-top-0"
                    style ={{
                      backgroundImage: `url(${
                        !!section.sectionimage.image.childImageSharp ? section.sectionimage.image.childImageSharp.fluid.src : section.sectionimage.image
                        })`,
                      }}></div>
                  </div>
                )}else{
                  return(
                    <div key= {index}>
                  <SectionContent content={section.text}/>
                  </div>
                  )
                }
            })}

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
  sections: PropTypes.array
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
      }
      rawMarkdownBody
    }
  }
`
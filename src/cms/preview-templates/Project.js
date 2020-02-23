import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const ProjectContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <ProjectContent content={content} />
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
      />
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      
    }
  }
`
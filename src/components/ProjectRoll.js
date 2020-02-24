import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {projects &&
          projects.map(({ node: project }) => (
            <div className="is-parent column is-6" key={project.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  project.frontmatter.featuredproject ? 'is-featured' : ''
                }`}
              >
                <header>
                  {project.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: project.frontmatter.featuredimage,
                          alt: `featured image thumbnail for project ${project.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="project-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={project.fields.slug}
                    >
                      {project.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {project.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {project.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={project.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                additionalimage{
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                } 
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                } 
                featuredproject
                description
                date 
              }    
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
)
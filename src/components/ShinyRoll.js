import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ShinyRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: shinies } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline shiny-roll-item-container">
        {shinies &&
          shinies.map(({ node: shiny }) => (
            shiny.frontmatter.featuredshiny ?
           <div className="is-parent column is-6" key={shiny.id}>
              <article
                className={`blog-list-item tile is-child box  ${
                  shiny.frontmatter.featuredshiny ? 'is-featured' : ''
                  }`}
              >
                <header>
                  {shiny.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail row is-1">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: shiny.frontmatter.featuredimage,
                          alt: `featured image thumbnail for shiny ${shiny.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="shiny-meta row is-1">
                    <Link
                      className="title .shiny-title"
                      to={shiny.fields.slug}
                    >
                      {shiny.frontmatter.title}
                    </Link>

                  </p>
                </header>

                <p>
                  <span className="subtitle is-size-5 is-block">
                    {shiny.frontmatter.description}
                  </span>
                  <Link className="button" to={shiny.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div> : null
          ))}
      </div>
    )
  }
}

ShinyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ShinyQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "shiny" } } }
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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                } 
                url
                description
                featuredshiny
              }    
            }
          }
        }
      }
    `}
    render={(data, count) => <ShinyRoll data={data} count={count} />}
  />
)
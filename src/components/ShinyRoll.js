import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ShinyRoll extends React.Component {
  render() {
    const { data } = this.props
    const shinies  = data.markdownRemark.frontmatter.shinies
    console.log(`data: ${JSON.stringify(data)}`)
    console.log(`Shinies: ${shinies}`)
    return (
      <div className="columns is-multiline shiny-roll-item-container">
        {shinies &&
          shinies.map((shiny) => (
            shiny.featuredshiny ?
           <div className="is-parent column is-6" key={shiny.id}>
              <article
                className={`
                  blog-list-item
                  tile
                  is-child
                  box 
                  ${shiny.featuredshiny ? 'is-featured' : ''}
                `}
              >
                <header className="shiny-header">
                  {shiny.featuredimage ? (
                    <div className="featured-thumbnail row is-1">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: shiny.featuredimage,
                          alt: `featured image thumbnail for shiny ${shiny.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="shiny-meta row is-1">
                    <div className="title shiny-title">
                      {shiny.title}
                    </div>
                  </p>
                </header>
                <div>
                  <span className="subtitle is-size-5 is-block">
                    {shiny.description}
                  </span>
                  <span className="button" >
                    <a className= "shiny-anchor" 
                    href={(shiny.url) ? shiny.url : ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    > Take me to it...</a>
                  </span>
                </div>
              </article>
            </div> : null
          ))}
      </div>
    )
  }
}

ShinyRoll.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape ({
        shinies: PropTypes.array
      }),
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ShinyQuery {
        markdownRemark(fileAbsolutePath: {regex: "/shiny-list/"}) {
          frontmatter {
            shinies {
              title
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
    `}
    render={(data, count) => <ShinyRoll data={data} count={count} />}
  />
)

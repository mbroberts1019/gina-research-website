import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const ShinyTemplate = ({ title, description, url }) => {
  

  return (
    <section className="section section--gradient">
      <div className="container margin-top-0">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="shiny-description-container">
                {description}
              </div>
              <div className="shiny-app-container">
              <iframe src={url} width="100%" height="100%"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ShinyTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
}

const Shiny = ({ data }) => {
  const { markdownRemark: shiny } = data

  return (
    <Layout>
      <ShinyTemplate
        title={shiny.frontmatter.title}
        description={shiny.frontmatter.description}
        url={shiny.frontmatter.url}
      />
    </Layout>
  )
}

Shiny.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Shiny

export const shinyQuery = graphql`
  query Shiny($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
          title
          templateKey
          url
          description
      }
    }
  }
`
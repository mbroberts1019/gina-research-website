import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
const Bio = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: {regex: "/home-content/"}) {
          frontmatter {
            title
            bio
          }
        }
      }
    `
  )

  return (
    <div className="home-bio-container">
    <ReactMarkdown source={markdownRemark.frontmatter.bio} />  
    </div>
  )}

export default Bio

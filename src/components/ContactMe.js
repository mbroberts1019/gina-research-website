import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";
const ContactMe = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: {regex: "/home-content/"}) {
          frontmatter {
            title
            contact
          }
        }
      }
    `
  )

  return (
    <div className="home-contact-container">
    <ReactMarkdown source={markdownRemark.frontmatter.contact}
          
        />  
    </div>
  )}

export default ContactMe
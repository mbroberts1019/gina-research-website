import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Educationlist = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: {regex: "/home-content/"}) {
          frontmatter {
            title
            education {
                dates
                institute
              }
          }
        }
      }
    `
  )

  return (
      
    <ul>
       {markdownRemark.frontmatter.education.map((data, i) => {
           return <li key={i} className="home-cv-item">
                   
                    <span><span className="home-cv-item-logo"> 🎓 </span>{data.institute}</span> 
                    <span>{data.dates}</span>
                </li>})}
    </ul>
  )}

export default Educationlist
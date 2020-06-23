import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Bio = () => {
//   const { markdownRemark } = useStaticQuery(
//     graphql`
//       query {
//         markdownRemark(fileAbsolutePath: {regex: "/home-content/"}) {
//           frontmatter {
//             title
//             bio
//           }
//         }
//       }
//     `
//   )

  return (
      
    <ul>
       {markdownRemark.frontmatter.outreach.map((data, i) => {
           return <li key= {i} className="home-cv-item " >
                    <span><span className="home-cv-item-logo">🍆</span>{data.program}</span>
                     <span>{data.dates}</span>
                </li>
           
           })}
    </ul>
  )}

export default Bio
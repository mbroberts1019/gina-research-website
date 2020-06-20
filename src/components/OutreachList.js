import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const OutreachList = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: {regex: "/home-content/"}) {
          frontmatter {
            title
            outreach {
              dates
              program
            }
          }
        }
      }
    `
  )

  return (
      
    <ul>
       {markdownRemark.frontmatter.outreach.map((data, i) => {return <li key= {i} >{data.program} {data.dates}</li>})}
    </ul>
  )}

export default OutreachList

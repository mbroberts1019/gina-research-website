import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  

  render() {
    return (
      <Layout>
        <section className="section">
        <div className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/wheat.jpg')`,
          }}>
          
            
            <div className="homepage-title">
              <h1>HomePage!!!!</h1>
              
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
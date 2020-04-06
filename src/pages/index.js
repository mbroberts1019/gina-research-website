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
        <section>
          <div className='three-tile-container'>
              <div className='home-banner-tile'
              style={{
                backgroundImage: `url('/img/hometile-1.PNG')`,
              }}></div>
              <div className='home-banner-tile'
              style={{
                backgroundImage: `url('/img/hometile-2.PNG')`,
              }}></div>
              <div className='home-banner-tile'
              style={{
                backgroundImage: `url('/img/hometile-3.PNG')`,
              }}></div>
          </div>
        </section>
      </Layout>
    )
  }
}
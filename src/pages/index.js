import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import getJokes from '../dad_jokes/dadJokes'
import Bio from '../components/Bio'
import EducationList  from '../components/EducationList'


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValidated: false,
      joke: {
        "setup": 'null',
        "punchline": 'null'
      }
    }
  }

  componentDidMount() {
    let joke = getJokes()
    this.setState(
      this.state.joke = joke
    )
  }

  render() {
    return (
      <Layout>
        <section>
          <div className='four-tile-container'>
            <div className='home-banner-tile '>
              <div className='home-banner-tile-avatar' style={{
                backgroundImage: `url('/img/Picture-day2019.jpg')`,
              }}></div>
              <p className="home-avatar-name">Virginia Nichols M.S.</p>
            </div>
            <div className='home-banner-tile home-banner-tile-1'
              style={{
                backgroundImage: `url('/img/hometile-1.PNG')`,
              }}></div>
            <div className='home-banner-tile home-banner-tile-2'
              style={{
                backgroundImage: `url('/img/hometile-2.PNG')`,
              }}></div>
            <div className='home-banner-tile home-banner-tile-3'
              style={{
                backgroundImage: `url('/img/hometile-3.PNG')`,
              }}></div>
          </div>
        </section>
        <hr className= "homepage-hr"></hr>
        <section >
          <div className="warning-banner">
            <h3> ⚠️  This Site is Under Construction  ⚠️</h3>
            <h5> Enjoy a Dad joke</h5>
          </div>
        </section>
        <section>
          <div className="dad-joke-container">
            {!this.state.joke.setup ? null :
              <div className="dad-joke-question">
                {this.state.joke.setup}
              </div>}
            {!this.state.joke.punchline | !this.state.joke.setup ? null :
              <div className="dad-joke-answer">
                {this.state.joke.punchline}
              </div>}
          </div>

        </section>
        <hr className= "homepage-hr"></hr>
        <section>
          <div className= "home-cv-container">
            <div className= "home-cv-column">
              <Bio/>
            </div>
            <div className= "home-cv-column">
              <h2 className= "home-cv-title">Background</h2>
              <EducationList/>
            </div>
          </div>
        </section>
        <hr className= "homepage-hr"></hr>
        
      </Layout>
    )
  }
}






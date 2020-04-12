import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'
import getJokes from '../dad_jokes/dadJokes'

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


  componentWillMount(){
    let joke = getJokes()
    this.setState(
      this.state.joke = joke
    )
    
  }

  render() {
    return (
      <Layout>
        <section>
          <div className='three-tile-container'>
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
      </Layout>
    )
  }
}
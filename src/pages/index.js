import React from 'react'
import Layout from '../components/Layout'
import Bio from '../components/home/Bio'
import ContactMe from '../components/home/ContactMe'
import EducationList from '../components/home/EducationList'
import Avatar from "../components/home/Avatar"
import Joke from "../components/home/Joke"

const Home = () => {

  return (
    <Layout>
      <section className="home-banner">
        <div className="avatar-banner">
          <Avatar />
          <p className="home-avatar-name">Virginia (Gina) Nichols </p>
        </div>
        <div className="interests-banner">
          <div className='three-tile-container is-mobile'>
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
        </div>
      </section>
      <section>
        <div className="home-bio-container">
          <Bio />
        </div>
      </section>
      <section className="home-cv-container">
        <div className="home-cv-column-1">
          <div className="dad-joke-section-title"> Enjoy a joke</div>
          <Joke />
        </div>
        <div className="home-cv-column-2">
          <h2 className="home-cv-title">Education</h2>
          <ul className="home-cv-list">
            <EducationList />
          </ul>
        </div>
      </section>
      <section>
        <div className="home-contact-container">
          <ContactMe />
        </div>
      </section>
    </Layout>
  )

}

export default Home

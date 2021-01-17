import React from 'react'
import Layout from '../../components/Layout'
import ShinyRoll from '../../components/ShinyRoll'

export default class ShinyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
             <ShinyRoll/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

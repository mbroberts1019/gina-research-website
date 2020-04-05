import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
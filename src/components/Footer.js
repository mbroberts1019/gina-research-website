import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-centered has-text-white-ter">
           <div className="copywrite">
              <p>Built on the JAMstack using Gatsby.js and NetlifyCMS</p>
              <p>© 2020 mikercodemonster</p>
            </div>
      </footer>
    )
  }
}

export default Footer

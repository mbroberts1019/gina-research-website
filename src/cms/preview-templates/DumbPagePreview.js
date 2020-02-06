import React from 'react'
import PropTypes from 'prop-types'
import { DumbPageTemplate } from '../../templates/dumbpage'

const DumbPagePreview = ({ entry, widgetFor }) => (
  <DumbPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DumbPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DumbPagePreview

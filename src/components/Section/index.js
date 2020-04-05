import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const Section = props => {
  const style = css({
    color: '#DCDDDE',
    padding: '14px 0'
  })
  const {
    children,
    ...opts
  } = props

  return (
    <div {...style} {...opts}>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.any
}

export default Section

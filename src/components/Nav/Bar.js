import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const Bar = props => {
  const style = css({
    padding: '16px 4px'
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

Bar.propTypes = {
  children: PropTypes.any
}

export default Bar

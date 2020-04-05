import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const Link = props => {
  const style = css({
    fontColor: 'inherit',
    textDecoration: 'inherit'
  })
  const {
    children,
    ...opts
  } = props

  return (
    <a
      {...opts}
      {...style}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.any
}

export default Link

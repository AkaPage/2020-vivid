import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const Button = props => {
  const styles = css({
    padding: '9px 14px',
    border: '2.5px solid #DCDDDE',
    display: 'inline-block'
  })

  return (
    <div {...styles} {...props}>
      {props.children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.any
}

export default Button

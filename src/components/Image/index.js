import React from 'react'
import { css } from 'glamor'

const Button = props => {
  const styles = css({
    padding: '4px',
    maxWidth: '100%',
    borderRadius: '9px',
    display: 'inline-block'
  })

  return (
    <img {...styles} {...props} />
  )
}

export default Button

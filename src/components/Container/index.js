import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const Container = props => {
  const styles = css({
    maxWidth: props.maxWidth || 800,
    padding: '0 4px',
    margin: '0 auto'
  })

  return (
    <div {...styles}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  maxWidth: PropTypes.number
}

export default Container

import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const Item = props => {
  const style = css({
    padding: '5px 7px',
    color: '#dcddde',
    display: 'inline-block'
  })
  const {
    right,
    primary,
    ...opts
  } = props
  let rightItem = {}
  let primaryItem = {}

  if (right) {
    rightItem = {
      float: 'right'
    }
  }
  if (primary) {
    primaryItem = {
      borderBottom: '2px solid #DCDDDE'
    }
  }

  return (
    <div
      {...style}
      {...opts}
      {...css(rightItem)}
      {...css(primaryItem)}
    >
      {props.children}
    </div>
  )
}

Item.propTypes = {
  children: PropTypes.any,
  right: PropTypes.bool,
  primary: PropTypes.bool
}

export default Item

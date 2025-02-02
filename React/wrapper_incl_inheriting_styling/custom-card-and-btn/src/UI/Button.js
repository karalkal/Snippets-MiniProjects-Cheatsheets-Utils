import React from 'react'

import './Button.css'

export default function Button (props) {
  const classes = 'button ' + props.className

  return (
    <button type='button' className={classes}>
      {props.children}
    </button>
  )
}

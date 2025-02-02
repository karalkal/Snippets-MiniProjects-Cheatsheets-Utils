import React from 'react'

import Card from '../UI/Card'
import './Header.css'

export default function Header () {
  return (
    <Card className='Header'>
      <p>
        The header inherits rounded edges and red shadow from Card.js which is
        sort of "generic wrapper" which we can use in other components.{' '}
      </p>
      <p>
        This is achieved by:
        <p>
          1. <code>&#123;props.children&#125;</code> in Card.js <br />
          (props.children in the "Generic" component is used to display whatever
          you include between the opening and closing tags when invoking a
          component.)
        </p>
        <p>
          2. By defining variable classes in the generic component with: <br />{' '}
          <code>const classes = "card " + props.className</code>
          <p>Note the space after generic class</p>
          <br />
          Then in the div we just pass it as{' '}
          <code> &#123;className=classes&#125;</code>
          <br />
          This allows the child to add its own classes.
        </p>
      </p>
    </Card>
  )
}

import React from 'react'

import Card from '../UI/Card'
import './Header.css'

export default function Header () {
  return (
    <Card className='Header'>
      <p>
        The header "inherits" <b>rounded edges and red shadow</b> from Card.js
        which is sort of "generic wrapper" which we can use in other components.
      </p>
      <p>
        Essentially the Header component renders a Card component and passes its
        content <b>as children</b> and CSS classes (available as
        props.className) to the generic Card component.
      </p>
      <p>This is achieved by:</p>
      <p>
        1. <code>&#123;props.children&#125;</code> in Card.js <br />
        (props.children in the generic component is used to display whatever you
        include between the opening and closing tags when invoking a component.)
      </p>
      <p>
        2. By defining variable CSS classes in the generic component with:{' '}
        <br /> <code>const classes = "card " + props.className</code>
      </p>
      <p>
        This allows to apply the Card.css classes (border and shadow) alongside
        the component-specific ones (e.g. background-color from Header.css).
        Note the space after generic class, i.e. simple string concatenation.
      </p>
      <p> Then in the div we just pass it as </p>
      <code> &#123;className=classes&#125;</code>
      <p>This allows the child to add its own classes.</p>
    </Card>
  )
}

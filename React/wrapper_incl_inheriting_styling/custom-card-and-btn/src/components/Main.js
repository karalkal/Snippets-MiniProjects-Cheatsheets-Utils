import React from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import './Main.css'

export default function Header () {
  return (
    <Card className='Main'>
      <p>Main also inherits rounded edges and red shadow from Card.js</p>
      The buttons inherit border (no value for color is provided) and
      border-radius from generic Button.js <br />
      <code>
        border: 2px solid;
        <br />
        border-radius: 17px 17px 0 0;
      </code>
      <br /> <br />
      <Button className='red-btn'>BTN with btn-red class</Button>
      <Button className='blue-btn'>BTN with btn-blue class</Button>
      <p>Buttons then get the padding, yellow BG and border colors from Main.css</p>
    </Card>
  )
}

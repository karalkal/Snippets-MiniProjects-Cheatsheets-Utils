import React from 'react'
import styles from './Notes.module.css'

function Notes () {
  return (
    <div className={styles['notes-container']}>
      <h1>Notes</h1>
      <ul>
        <li>
          <span>App.js</span> maintains state of users (passed to{' '}
          <span>UsersList.js</span>) and updates it via{' '}
          <span>addUserHandler</span> function (passed to in{' '}
          <span>AddUser.js</span>) if valid form is submitted.
        </li>
        <li>
          Both these components pass their content as children to reusable{' '}
          <span>Card.js</span> component. The <span>Card.js</span> component
          also receives <span>props.className</span> and concatenates these to
          its own styles{' '}
          <span>$&#123;classes.card&#125; $&#123;props.className&#125;</span>
        </li>
        <li>
          As a demo the form input is managed in two ways:<br></br>
          1. Controlled input: Using state, , input with attribute
          <code>value=&#123;userName&#125;</code>, change of value triggers the
          state updating function. React controls it, drawback is too many
          re-renders. <br></br>
          2. Uncontrolled using <span>useRef hook</span>. Here value is captured
          and then reset to empty string using{' '}
          <code>ageInputRef.current.value</code>
        </li>
        <li>
          usePortal hook is used for the modal. The component is placed in{' '}
          <span>App - AddUser</span> but semantically it belongs to the same
          level as the <span>root div</span> because it is an overlay over all
          other elements.
        </li>
        <li>
          The modal itself is split into 2 subcomponents which are mounted
          separately into the DOM tree. Its props are passed to{' '}
          <span>AddUser.js</span>. If validation fails, <span>ErrorModal</span>{' '}
          is displayed with relevant title and message. Backdrop and Button have
          <span> onClick=&#123;props.onConfirm&#125;</span> which resets state
          of error <span>setError(null)</span>.
        </li>
        <li>
          <span>errorHandler</span> function is passed from AddUser to
          ErrorModal to Backdrop and from AddUser to ErrorModal to ModalOverlay
          to card and to Button.{' '}
        </li>
      </ul>
    </div>
  )
}

export default Notes

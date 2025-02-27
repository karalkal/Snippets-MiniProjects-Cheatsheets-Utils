import React, { useState, useRef } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = props => {
  const [userName, setUserName] = useState('')
  const ageInputRef = useRef()

  const [error, setError] = useState()

  function usernameChangeHandler (event) {
    setUserName(event.target.value)
    // console.log("value updated")
  }

  function addUserHandler (event) {
    event.preventDefault()
    const enteredUserAge = ageInputRef.current.value
    if (userName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Enter non-empty values.'
      })
      return
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Age must be over 0.'
      })
      return
    }

    props.onAddUser(userName, enteredUserAge)
    setUserName('')
    ageInputRef.current.value = ''
  }

  function errorHandler () {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={userName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser

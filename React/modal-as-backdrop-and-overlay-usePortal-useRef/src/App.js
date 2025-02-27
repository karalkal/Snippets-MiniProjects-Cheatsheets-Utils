import React, { useState, Fragment } from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import Notes from './components/Notes'

function App () {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      <Notes />
    </Fragment>
  )
}

export default App

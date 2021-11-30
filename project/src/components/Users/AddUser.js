import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {

  const [enteredUsername, SetEnteredUsername] = useState('');
  const [enteredAge, SetEnteredAge] = useState('');
  const [error,SetError] = useState();
  
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      SetError({
        title:"Invalid Input",
        message:"Please enter valid name and age (non-empty value)."
      })
    }
    if (+enteredAge < 1) {
      SetTitle("");
      SetMessage("")
    }
    props.onAddUser(enteredUsername, enteredAge)
    SetEnteredUsername('');
    SetEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    SetEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    SetEnteredAge(event.target.value);
  }

  return (
    <div>
      <ErrorModel title={title} message={message} />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

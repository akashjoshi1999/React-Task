import React from 'react'

import Card from '../UI/Card';
import classes from './UsersList.module.css';


const UserList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {
                    props.users.map(user => (
                        <ul key={user.id}> 
                            {user.name} ({user.age} years old)
                        </ul>
                    ))}
            </ul>
        </Card>
    )
}

export default  UserList;
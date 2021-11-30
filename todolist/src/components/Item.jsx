import React, { useState } from 'react'
import './addItemStyle.css'
const Item = (props) => {
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');


    const submit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName) {
            alert("lastName or lastName ate blank");
        }
        else {
            props.addItem(firstName, lastName);
            SetFirstName("");
            SetLastName("");
        }
    }

    return (
        <div>
            <h1>Add Item</h1>
            <div>

                <form onSubmit={submit}>
                    <input type="text"
                        className="addItem-input"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => SetFirstName(e.target.value)}
                    /><br></br>
                    <input type="text"
                        value={lastName}
                        placeholder="Enter your last name"
                        onChange={(e) => SetLastName(e.target.value)}
                    /><br></br>
                     <button className="addItem-input">Create</button>
                    
                </form>

            </div>
        </div>
    )
}
export default Item;
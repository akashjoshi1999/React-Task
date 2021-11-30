import React, { useState } from 'react'

const Adduser = () => {
    const [user, setUser] = useState('');
    const [age, setAge] = useState('');

    const [data, setData] = useState([
        {
            uName: '', uAge: ''
        }
    ]);

    const adduserHanlder = (e) => {
        e.preventDefault();
        if (user.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }
        setData((prevUsersList) => {
            return [
              ...prevUsersList,
              { uName: user, uAge: age},
            ];
          });
    }

    return (
        <div className="App">

            <form onSubmit={adduserHanlder}>
                <label>Username</label><input type="text" placeholder="enter user name" value={user} onChange={(e) => setUser(e.target.value)} /> <br />
                <label>Age</label> <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} /> <br />
                <button>Adduser</button>
            </form>
            <div>
                <ul>
                    {
                        data !== null ?
                            data.map((ele, id) => {
                                return (
                                    <li key={id}>{ele.uName} () {ele.uAge} ,</li>
                                )
                            }) : ""
                    }
                </ul>
            </div>
        </div>
    )
}

export default Adduser

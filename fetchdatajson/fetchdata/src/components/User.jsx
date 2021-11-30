import React, { useState, useEffect } from 'react'
// import AddUser from './AddUser';
import Axios from 'axios'

const User = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const [name, setname] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [website, setwebsite] = useState("")
    const [street, setstreet] = useState("")
    const [suite, setsuite] = useState("")
    const [city, setcity] = useState("")
    const [zipcode, setzipcode] = useState("")
    const [lat, setlat] = useState("")
    const [lng, setlng] = useState("")
    const [compnayName, setCompnayName] = useState("")
    const [catchPhrase, setcatchPhrase] = useState("")
    const [bs, setBs] = useState("")
    const [show, setShow] = useState(true);
    const [id, setId] = useState('')
    const submitHanlder = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3007/addusers', {
            name: name,
            username: username,
            email: email,
            website: website,
            phone: phone,
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            lat: lat,
            lng: lng,
            compnayName: compnayName,
            catchPhrase: catchPhrase,
            bs: bs
        }).then((response) => {
            console.log("success");
            console.log(response);
        });
        clearform()
    }
    const onDelete = (user) => {
        const user_id = user.id;
        setData(
            data.filter((e) => {
                return e !== user;
            })
        );
        Axios.post("http://localhost:3007/delete_user", {
            userId: user_id,
        }).then((response) => {
            setData(response.data);
        });
    };

    const clearform = () => {
        setname('');
        setusername('');
        setemail('');
        setphone('');
        setwebsite('');
        setstreet('');
        setsuite('');
        setcity('');
        setzipcode('');
        setlat('');
        setlng('');
        setCompnayName('');
        setcatchPhrase('');
        setBs('');
    }
    const onEdit = (post) => {
        const userId = post.id;
        const index = data.findIndex((x) => x.id === userId);
        setId(index);
        setname(data[index].name);
        setusername(data[index].username);
        setemail(data[index].email);
        setphone(data[index].phone);
        setwebsite(data[index].website);
        setstreet(data[index].address.street);
        setsuite(data[index].address.suite);
        setcity(data[index].address.city);
        setzipcode(data[index].address.zipcode);
        setlat(data[index].address.geo.lat);
        setlng(data[index].address.geo.lng);
        setCompnayName(data[index].company.name);
        setcatchPhrase(data[index].company.catchPhrase);
        setBs(data[index].company.bs);
        setShow(false);
    }
    const editUsers = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3007/editusers', {
            id: id,
            name: name,
            username: username,
            email: email,
            website: website,
            phone: phone,
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            lat: lat,
            lng: lng,
            compnayName: compnayName,
            catchPhrase: catchPhrase,
            bs: bs
        }).then((response) => {
            console.log("success");
            console.log(response);
        });
        clearform()
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div>
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-1">
                                    <label>Enter Name</label>
                                    <input type="text" value={name} required onChange={(e) => setname(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter Name" />
                                </div>
                                <div className="col-md-1">
                                    <label>Enter username</label>
                                    <input type="text" value={username} required onChange={(e) => setusername(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter username" />
                                </div>
                                <div className="col-md-1">
                                    <label>Enter email</label>
                                    <input type="text" value={email} required onChange={(e) => setemail(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter email" />
                                </div>
                                <div className="col-md-1">
                                    <label>Enter Phone</label>
                                    <input type="text" value={phone} required onChange={(e) => setphone(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter phone" />
                                </div>
                                <div className="col-md-1">
                                    <label>Enter website</label>
                                    <input type="text" value={website} required onChange={(e) => setwebsite(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter website" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-1">
                                    <label>Enter Address</label>
                                </div>
                                <div className="col-md-2">
                                    <label>Enter street</label>
                                    <input type="text" value={street} required onChange={(e) => setstreet(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter street" />
                                </div>
                                <div className="col-md-2">
                                    <label>Enter suite</label>
                                    <input type="text" value={suite} required onChange={(e) => setsuite(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter suite" />
                                </div>
                                <div className="col-md-2">
                                    <label>Enter city</label>
                                    <input type="text" value={city} required onChange={(e) => setcity(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter city" />
                                </div>
                                <div className="col-md-2">
                                    <label>Enter zipcode</label>
                                    <input type="text" value={zipcode} required onChange={(e) => setzipcode(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter zipcode" />
                                </div>
                                <div className="col-md-2">
                                    <label>Enter lat</label>
                                    <input type="text" value={lat} required onChange={(e) => setlat(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter lat" />
                                </div>
                                <div className="col-md-2">
                                    <label>Enter lng</label>
                                    <input type="text" value={lng} required onChange={(e) => setlng(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter lng" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-1">
                                    <label>Enter company</label>
                                </div>
                                <div className="col-md-2">
                                    <label>Enter name</label>
                                    <input type="text" value={compnayName} required onChange={(e) => setCompnayName(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter name" />
                                </div>
                                <div className="col-md-2">
                                    <label>Enter catchPhrase</label>
                                    <input type="text" value={catchPhrase} required onChange={(e) => setcatchPhrase(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter catchPhrase" />
                                </div>
                                <div className="col-md-2">
                                    <label>Enter bs</label>
                                    <input type="text" value={bs} onChange={(e) => setBs(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter bs" />
                                </div>
                            </div>
                        </div>
                        {show ?
                            <button type="submit" className="btn btn-primary" onClick={submitHanlder}>Submit</button> :
                            <button type="submit" className="btn btn-primary" onClick={editUsers}>Edit</button>
                        }

                    </form >
                </div >
                <div>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>street</th>
                                <th>suite</th>
                                <th>city</th>
                                <th>zipcode</th>
                                <th>lat</th><th>lng</th>
                                <th>phone</th>
                                <th>website</th>
                                <th>name</th>
                                <th>catchPhrase</th>
                                <th>BS</th>
                                <th>DELETE</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.title}</td>
                                        <td>{item.username}</td>
                                        <td>{item.address.street}</td>
                                        <td>{item.address.suite}</td>
                                        <td>{item.address.city}</td>
                                        <td>{item.address.zipcode}</td>
                                        <td>{item.address.geo.lat}</td>
                                        <td>{item.address.geo.lng}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.website}</td>
                                        <td>{item.company.name}</td>
                                        <td>{item.company.catchPhrase}</td>
                                        <td>{item.company.bs}</td>
                                        <td><button onClick={() => { onDelete(item) }}>❌ &nbsp;</button></td>
                                        <td><button className="primary" onClick={() => { onEdit(item) }}>Edit &nbsp;</button></td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default User

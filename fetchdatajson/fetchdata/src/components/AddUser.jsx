import React, { useState } from 'react'
import Axios from 'axios';

const AddUser = () => {

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
    }
    return (
        <div>
            <form onSubmit={submitHanlder}>
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
                            <input type="text" value={bs}  onChange={(e) => setBs(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter bs" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </div >
    )
}

export default AddUser

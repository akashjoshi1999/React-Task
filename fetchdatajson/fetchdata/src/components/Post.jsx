import React, { useEffect, useState, useReducer } from 'react'
import Axios from 'axios';
import reducer from './reducer';

const initialValue = {
    title: '',
    post: ''
}
const Post = () => {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(true);
    const [id, setId] = useState('')
    // const [title, settitle] = useState("")
    // const [body, setbody] = useState("")

    useEffect(() => {
        const abc = setTimeout(
            Axios.get("http://localhost:3010/posts").then((response) => {
                if (response.data) {
                    setData(response.data);
                }
            })
            , 1000)
        console.log(data)
        return () => clearTimeout(abc)
    }, [])

    const [state, dispatch] = useReducer(reducer, initialValue)

    const submitHanlder = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3010/posts', {
            title: title,
            body: body
        }).then((response, err) => {
            console.log("success");
            console.log(response);
        });
        clearForm()
    }


    const editPosts = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3010/posts/', {
            id: id,
            body: body,
            title: title
        }).then((response) => {
            setData(response);
        });
        clearForm()
    }

    const clearForm = () => {
        settitle('')
        setbody('')
    }

    const onDelete = (post) => {
        const post_id = post.id;
        setData(
            data.filter((e) => {
                return e !== post;
            })
        );
        Axios.post("http://localhost:3007/delete_post", {
            postId: post_id,
        }).then((response) => {

        });
    };

    const onEdit = (post) => {
        const postId = post.id;
        const index = data.findIndex((x) => x.id === postId);
        setId(index);
        settitle(data[index].title);
        setbody(data[index].body);
        setShow(false);
    }
    return (
        <>
            <div>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Enter title</label>
                                <input type="text" size="150" value={statetitle} required onChange={(e) => settitle(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter Name" />
                            </div>
                            <div className="col-md-6">
                                <label>Enter body</label>
                                <input type="text" value={body} required onChange={(e) => setbody(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter username" />
                            </div>
                        </div>
                    </div>
                    {show ?
                        <button type="submit" className="btn btn-primary" onClick={submitHanlder}>Submit</button> :
                        <button type="submit" className="btn btn-primary" onClick={editPosts}>Edit</button>
                    }
                </form >
            </div>
            <div>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                            <th>DELETE</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
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


export default Post

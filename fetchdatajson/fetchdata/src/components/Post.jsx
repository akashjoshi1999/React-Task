import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const Post = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(true);
    const [id, setId] = useState('')
    useEffect(() => {
        fetch("http://localhost:3001/posts")
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
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const submitHanlder = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3007/addposts', {
            title: title,
            body: body
        }).then((response) => {
            console.log("success");
            console.log(response);
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
            setData(response.data);
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
    const editPosts = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3007/editposts', {
            id: id,
            body: body,
            title: title
        }).then((response) => {
            console.log("success");
            console.log(response);
        });
        clearForm()
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
                                <div className="col-md-6">
                                    <label>Enter title</label>
                                    <input type="text" size="150" value={title} required onChange={(e) => settitle(e.target.value)} className="form-control" name="exampleInputEmail1" placeholder="Enter Name" />
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

                            {data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
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
}

export default Post

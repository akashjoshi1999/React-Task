import React from 'react'

function Home() {
    // let history = useHistory();

    // const userHanlder = () => {
    //     history.push('/users')
    // }
    // const postHanlder = () => {
    //     history.push('/posts')
    // }
    return (
        <div>
            <a href="/users">users</a><br/>
            <a href="/posts">posts</a>
        {/* <input type="button" value="User" onClick={userHanlder} />
            <input type="button" value="Post" onClick={postHanlder} /> */}
        </div>
    )
}

export default Home

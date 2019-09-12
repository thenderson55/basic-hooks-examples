import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data)
      })
      .catch(err => console.log('error', err))

  }, [idFromButtonClick])

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
      <button type="button" onClick={handleClick}>Get Post</button>
      <div>
        {post.title}
        {/* {posts && posts.map(post => (
          <p key={post.id}>{post.title}</p>
        ))} */}
      </div>
    </div>
  )
}

export default DataFetching

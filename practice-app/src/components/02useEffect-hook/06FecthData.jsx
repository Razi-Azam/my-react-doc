import React, { useEffect, useState } from 'react'
import axios from 'axios'

function  FecthData() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        <ul className='text-xl text-lime-950 bg-slate-100 p-10'>
            {
                posts.map(post => <li className='mt-2' key={post.id}>{post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default FecthData
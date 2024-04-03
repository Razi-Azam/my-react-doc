import React, { useEffect, useState } from 'react'
import axios from 'axios'

function  FecthData() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

  return (
    <div>
        {/* Fetch data on the basis of user input and on button click
            When the button is clicked, the handleclick event set the id from 
            the input field to the idFromButtonClick which helps in fetching the desired data
        */}
        <input 
            type="text"
            className='border border-gray-950 bg-slate-200 text-gray-950 w-auto px-4 mx-2'
            value={id}
            onChange={(e) => setId(e.target.value)} 
        />
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-30 px-2'
            onClick={handleClick}>Fetch Post
        </button>
        <h2 
            className='text-gray-950 my-2 text-xl'>Title - {post.title}
        </h2>
       { /* This is a simple example of fetching data from API
            <ul className='text-xl text-lime-950 bg-slate-100 p-10'>
            {
                posts.map(post => <li className='mt-2' key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default FecthData
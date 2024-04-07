import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchData() {
    const [loader, setLoader] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoader(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoader(false)
            setPost({})
            setError('Something went wrong.')
        })
    }, [])
  return (
    <div>
        {loader ? 'loading...' : post.title}
        {error ? error : null}
    </div>
  )
}

export default FetchData
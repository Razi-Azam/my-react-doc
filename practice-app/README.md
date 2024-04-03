# Topcis and screenshots of the examples of the practice session
[1. useState Hook](#hooks)
<details>
  <summary>useState Hook with previous state</summary>
    <h3>useState with previous state</h3>
    <img src="https://github.com/Razi-Azam/my-react-doc/assets/106505820/044a9165-9655-41f7-b9da-c76b68ae1bf0" width="350" height="100" />
  
    ```javascript
      const incrementFive = () => {
      for(let i = 0; i < 5; i++) {
        // setCount(count + 1) //Bug: shows 1 everytime the button is clicked because the count is not incremented based on the previous value.
        setCount(prev => prev + 1) // increment by 1 beucase the count uses the prev value to make increment
      }
      }
    ```
</details>

<details>
  <summary>useState Hook with object</summary>
    <h3>useState with object</h3>
    <img src="https://github.com/Razi-Azam/my-react-doc/assets/106505820/fe12848f-dba2-42d4-9925-aa103e66c399" width="450" height="300" />
    <ul>
      <li>useState hook doesn't merge the state. We have to do it manually.</li>
      <li>Here, we have merged the state using a spread operator.</li>
    </ul>
  
    ```javascript
        <input type="text"
            className='border border-gray-950 bg-slate-200 text-gray-950 w-auto px-4 mx-2'
            value={name.firstName}
            // onChange={(e) => setName({firstName: e.target.value})} Error: here, useState hook will not merge the state
            onChange={(e) => setName({...name, firstName: e.target.value})} //spread the name the set the name property using spread operator to manual merge
        />
      }
    ```

</details>

[2. useEffect Hook](#hooks)

<details>
  <summary>Fetching Data using useEffect Hook</summary>
    <h3>useState with previous state</h3>
    <img src="https://github.com/Razi-Azam/my-react-doc/assets/106505820/84d815b1-2709-4ef8-a361-60794a45a344" width="350" height="100" />
  
    ```javascript
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
        
            </div>
          )
        }
        
        export default FecthData
    ```
</details>

import React, { useState } from 'react'

function WithArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10 ) + 1
        }])
    }

  return (
    <div>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-30 px-2'
            onClick={addItem}>Add a numebr
        </button>
        <ul className='mt-4'>
            {
                items.map(item => (
                    <li className='mt-2 text-3xl' key={item.id}>{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default WithArray
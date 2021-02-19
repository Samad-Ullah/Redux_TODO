import React from 'react'
import './TodoItem.css'

function TodoItem({item}) {
    return (
        <div className="todoitem">
            <h2>{item}</h2>
            
            <button>Delete</button>
            
        </div>
    )
}

export default TodoItem

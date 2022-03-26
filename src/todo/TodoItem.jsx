import React from 'react';

const TodoItem = ({  todo,name,handleRemoveTodos,isChekedHandler,}) => {
    return (
        <div className='todo-item' >
            <div className='todo-item__checkbox'>
                <input className='todo-item__checkbox-item' type="checkbox" onChange={() => isChekedHandler(todo.id)}/>
                <span className="name">{name}</span>
            </div>
            <button onClick={() => handleRemoveTodos(todo.id)} className='todo-item__btn'>X</button>
        </div>

    );
};

export default TodoItem;
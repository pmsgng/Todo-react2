import React, {useState} from 'react';
import './App.css';
import TodoItem from './todo/TodoItem';
import TodoInputAdd from './todo/TodoInputAdd';


const App = () => {

  const [name, setName] = useState('')
  const [todos, setTodos] = useState([])

  const isChekedHandler = (id) => {
    const newTodoList = todos.map( todo => {
      if(todo.id === id)
        return {...todo,isChecked: !todo.isChecked}
      return todo;
    })
    setTodos(newTodoList)
  }

  const handleRemoveTodos = (id) => {
    setTodos(prev => [...prev.filter(todo => todo.id !== id) ])
  }

  const onKeyPressNameHandler = e => {
    if(e.key === 'Enter') {
      e.preventDefault()
      if(e.target.value)
      setTodos(prev => [...prev,{id: todos.length,name,isChecked: false,}])
      setName('')
    }
  }

  const todoListCounter = todos.length;
  const checkedCounter = todos.filter(item => item.isChecked).length;

  return (
    
      <div className='todo'>
        <h1>Список задач: {todoListCounter}, Выполненных: {checkedCounter}</h1>
          {todos && 
            todos.map((todo) => 
            <TodoItem 
              key={`_todo_${todo.id}`} 
              id={todo.id}
              todo={todo}
              name={todo.name} 
              isChekedHandler={isChekedHandler}
              handleRemoveTodos={handleRemoveTodos}
            />
          )}
          <TodoInputAdd 
            value={name} 
            id={todos.id} 
            onChange={e => setName(e.target.value)} 
            onKeyPress={onKeyPressNameHandler}
          />
      </div>

  );
};

export default App;

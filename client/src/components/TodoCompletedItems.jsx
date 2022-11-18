import React from 'react'
import { useSelector } from 'react-redux';

const TodoCompletedItems = () => {
    const todos=useSelector((store)=>store.todos)
    const completedTodo=todos.filter((todo)=>todo.completed===true)
  return (
    <h4 className='mt-3'>Total Completed Items: {completedTodo.length}</h4>
  )
}

export default TodoCompletedItems
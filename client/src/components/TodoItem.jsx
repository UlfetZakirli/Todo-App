import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toggleTodoAsync } from '../redux/todoSlice';

const TodoItem = ({id,completed,title}) => {
    const dispatch=useDispatch()

    const handleToggleTodo=()=>{
        dispatch(toggleTodoAsync({id, completed:!completed}))
    }

    const handleDeleteTodo=()=>{
        dispatch(deleteTodoAsync({id}))
    }

  return (
<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
    <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
            <input type="checkbox" className='mr-3' checked={completed} onChange={handleToggleTodo} />
            {title}
        </span>
        <button className='btn btn-danger'  onClick={handleDeleteTodo}>Delete</button>
    </div>
</li>
  )
}

export default TodoItem
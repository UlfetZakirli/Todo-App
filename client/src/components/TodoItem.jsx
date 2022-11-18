import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoAsync } from "../redux/todoSlice";

const TodoItem = ({id, completed, title }) => {
    const dispatch=useDispatch()

    const handleToggleClick=()=>{
        dispatch(toggleTodoAsync({id, completed:!completed}))
    }

    const handleDeleteClick=()=>{
        dispatch(deleteTodo({id}))
    }
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" onChange={handleToggleClick} checked={completed} className="mx-2" />
          {title}
        </span>
        <button onClick={handleDeleteClick} className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

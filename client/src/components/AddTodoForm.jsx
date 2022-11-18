import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoAsync } from "../redux/todoSlice";

const AddTodoForm = () => {
  const dispatch=useDispatch()
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user entered: " + value);
    dispatch(addTodoAsync({title:value}))
  };
  return (
    <form onSubmit={handleSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        placeholder="Add todo..."
        className="form-control mr-sm-2 mt-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoAsync } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch=useDispatch()

const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addTodoAsync({title:value}))
}

  return (
    <form onSubmit={handleSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only mb-2">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add Todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">Submit</button>
    </form>
  );
};

export default AddTodoForm;

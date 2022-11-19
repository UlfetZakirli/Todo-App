import React from "react";
import { useSelector } from "react-redux";

const TotalCompletedItems = () => {
  const todos = useSelector((store) => store.todos);
  const completedItems = todos.filter((todo) => todo.completed === true);
  return (
    <h4 className="mt-3">Total Completed Items: {completedItems.length}</h4>
  );
};
  
export default TotalCompletedItems;

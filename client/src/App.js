import "bootstrap/dist/css/bootstrap.min.css"
import AddTodoForm from "./components/AddTodoForm";
import TodoCompletedItems from "./components/TotalCompletedItems";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
     <AddTodoForm/>
     <TodoList/>
     <TodoCompletedItems/>
    </div>
  );
}

export default App;

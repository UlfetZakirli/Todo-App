import "bootstrap/dist/css/bootstrap.min.css"
import AddTodoForm from "./components/AddTodoForm";
import TodoCompletedItems from "./components/TodoCompletedItems";
import TodoList from "./components/TodoList";

function App() {
  console.log(Date.now());
  return (
    <div className="container bg-white p-4 mt-5">
      <AddTodoForm />
      <TodoList/>
      <TodoCompletedItems/>
    </div>
  );
}

export default App;

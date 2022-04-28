import './App.css';
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";

function App() {
  return (
      <>
          <div className={'clock'}>
              <Clock />
          </div>
          <div className={"todo-app"}>
              <TodoList />
          </div>
      </>
  );
}

export default App;

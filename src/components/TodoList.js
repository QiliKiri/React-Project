import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [numOfTasks, setNumOfTasks] = useState(0);

    const addTodo = (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
          alert('Task content cannot be empty');
          return;
      }
      const newTodos = [todo, ...todos].sort((a,b) => b.urgencyLv - a.urgencyLv);
      setTodos(newTodos);
      setNumOfTasks(numOfTasks + 1);
      // console.log(todo);
    }

    const removeTodo = (id) => {
        const removed = todos.find(todo => todo.id == id);
        removed.isComplete ? setNumOfTasks(numOfTasks) : setNumOfTasks(numOfTasks - 1)
        const afterRemove = [...todos]
            .filter(todo => todo.id !== id)
            .sort((a,b) => b.urgencyLv - a.urgencyLv);
        setTodos(afterRemove);
    }

    const editTodo = (id, newValue, newUrgencyLv) => {
        if (!newValue || /^\s*$/.test(newValue)) {
            alert('Task content cannot be empty');
            return;
        }
        const newTodo = {id: id, text: newValue, urgencyLv: newUrgencyLv};
        setTodos(todos.map(todo => (todo.id === id) ? newTodo : todo)
            .sort((a, b) => b.urgencyLv - a.urgencyLv));
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                if (todo.isComplete) {
                    todo.isComplete = false;
                    setNumOfTasks(numOfTasks + 1);
                } else {
                    todo.isComplete = true;
                    setNumOfTasks(numOfTasks - 1);
                }
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>You have {numOfTasks} tasks today</h1>
            <TodoForm onSubmit={addTodo} />
            <div className={'todo-list'}>
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
            </div>
        </div>
    )
}

export default TodoList;
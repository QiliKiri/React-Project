import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import ProgressBar from "./ProgressBar";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [numOfTasks, setNumOfTasks] = useState(0);
    const [numOfComplete, setNumOfComplete] = useState(0);

    const addTodo = (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
          alert('Task content cannot be empty');
          return;
      }
      const newTodos = [todo, ...todos].sort((a,b) => a.priorityLv - b.priorityLv);
      setTodos(newTodos);
      setNumOfTasks(numOfTasks + 1);
      // console.log(todo);
    }

    const removeTodo = (id) => {
        const removed = todos.find(todo => todo.id === id);
        removed.isComplete ? setNumOfComplete(numOfComplete - 1) : setNumOfComplete(numOfComplete);
        setNumOfTasks(numOfTasks - 1);
        const afterRemove = [...todos]
            .filter(todo => todo.id !== id)
            .sort((a,b) => a.priorityLv - b.priorityLv);
        setTodos(afterRemove);
    }

    const editTodo = (id, newValue, newDetail, newPriorityLv) => {
        if (!newValue || /^\s*$/.test(newValue)) {
            alert('Task content cannot be empty');
            return;
        }
        setTodos(todos.map(todo => (todo.id === id)
            ? {...todo, text: newValue, detail: newDetail, priorityLv: newPriorityLv}
            : todo)
            .sort((a, b) => a.priorityLv - b.priorityLv));
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                if (todo.isComplete) {
                    todo.isComplete = false;
                    setNumOfComplete(numOfComplete - 1);
                } else {
                    todo.isComplete = true;
                    setNumOfComplete(numOfComplete + 1);
                }
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <>
            <h1>You have {numOfTasks - numOfComplete} tasks left today</h1>
            <ProgressBar numOfTasks={numOfTasks} numOfComplete={numOfComplete} />
            <TodoForm onSubmit={addTodo} />
            <div className={'todo-list'}>
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
            </div>
        </>
    )
}

export default TodoList;
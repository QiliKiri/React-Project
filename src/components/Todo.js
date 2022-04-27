import React, {useState} from "react";
import TodoForm from "./TodoForm";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({todos, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        urgencyLv: 0
    })

    const submitEdit = todo => {
        editTodo(edit.id, todo.text, todo.urgencyLv);
        setEdit({
            id: null,
            value: "",
            urgencyLv: 0
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete':'todo-row'} key={index}>
            <div className={'task'} key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text} | Urgency Level:({todo.urgencyLv})
            </div>
            <div className={'icons'}>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className={'delete-icon'}/>
                <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text, urgencyLv: todo.urgencyLv})}
                    className={'edit-icon'}/>
            </div>
        </div>
        )
    )
}

export default Todo;
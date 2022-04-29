import React, {useState} from "react";
import TodoForm from "./TodoForm";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {MdDoneOutline} from 'react-icons/md'

function Todo({todos, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        detail: '',
        priorityLv: 0
    })

    const submitEdit = (todo) => {
        editTodo(edit.id, todo.text, todo.detail, todo.priorityLv);
        setEdit({
            id: null,
            value: '',
            detail: '',
            priorityLv: 0
        });
    }

    if (edit.id) {
        return <TodoForm className={'todo-form'} edit={edit} onSubmit={submitEdit} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete':'todo-row'} key={index}>
            <div className={'task priority'+todo.priorityLv} key={todo.id}>
                <details>
                    <summary>{todo.text}</summary>
                    {todo.detail}
                </details>
            </div>
            <div className={'icons'}>
                <MdDoneOutline
                    onClick={() => completeTodo(todo.id)}
                    />
                <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text, detail: todo.detail, priorityLv: todo.priorityLv})}
                    className={'edit-icon'}/>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className={'delete-icon'}/>
            </div>
        </div>
        )
    )
}

export default Todo;
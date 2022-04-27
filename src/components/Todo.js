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
        urgencyLv: 0
    })

    const submitEdit = (todo) => {
        editTodo(edit.id, todo.text, todo.detail, todo.urgencyLv);
        setEdit({
            id: null,
            value: '',
            detail: '',
            urgencyLv: 0
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete':'todo-row'} key={index}>
            <div className={'task'} key={todo.id}>
                <details>
                    <summary>{todo.text} | Urgency Level:({todo.urgencyLv})</summary>
                    {todo.detail}
                </details>
            </div>
            <div className={'icons'}>
                <MdDoneOutline
                    onClick={() => completeTodo(todo.id)}
                    />
                <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text, detail: todo.detail, urgencyLv: todo.urgencyLv})}
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
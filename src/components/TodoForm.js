import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit? props.edit.value : '');
    const [priority, setPriority] = useState(props.edit? props.edit.priorityLv : 1);
    const [detail, setDetail] = useState(props.edit? props.edit.detail : '');
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus()
    // })

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    }
    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            text: input,
            detail: detail,
            priorityLv: priority
        });

        setInput('');
        setDetail('');
        setPriority('');
    }

    return (
        <form className={'todo-form'} onSubmit={handleSubmit}>

            <>
                <label htmlFor={'task'}>Task:</label>
                <input type={'text'} placeholder={'Input the task'} value={input}
                       name={'text'} id={'task'}
                       onChange={handleInputChange} />
                <label htmlFor={'detail'}>Detail:</label>
                <input type={'text'} placeholder={'Input the detail [Optional]'} value={detail}
                       name={'detail'} id={'detail'}
                       onChange={handleDetailChange} />
                <label htmlFor={'priority'}>Priority Level:</label>
                <input type={'number'} placeholder={'[highest] 1 - 5 [lowest]'} value={priority}
                       min={1} max={5}
                       name={'priority'} id={'priority'}
                       onChange={handlePriorityChange} />
                <button className={'todo-button'}>{props.edit? 'Edit' : 'Add'}</button>
            </>

        </form>
    );
}

export default TodoForm;
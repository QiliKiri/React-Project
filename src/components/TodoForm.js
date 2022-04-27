import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit? props.edit.value : '');
    const [urgency, setUrgency] = useState(props.edit? props.edit.urgencyLv : 1);
    const [detail, setDetail] = useState(props.edit? props.edit.detail : '');
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus()
    // })

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleUrgencyChange = (e) => {
        setUrgency(e.target.value);
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
            urgencyLv: urgency
        });

        setInput('');
        setDetail('');
        setUrgency('');
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
                <label htmlFor={'urgency'}>Urgency Level:</label>
                <input type={'number'} placeholder={'1 - 5'} value={urgency}
                       min={1} max={5}
                       name={'urgency'} id={'urgency'}
                       onChange={handleUrgencyChange} />
                <button className={'todo-button'}>{props.edit? 'Edit' : 'Add'}</button>
            </>

        </form>
    );
}

export default TodoForm;
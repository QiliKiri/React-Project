import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit? props.edit.value : '');
    const [urgency, setUrgency] = useState(props.edit? props.edit.urgencyLv : 1);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Date.now(),
            text: input,
            urgencyLv: urgency
        });

        setInput('');
        setUrgency(1);
    }

    return (
        <form className={'todo-form'} onSubmit={handleSubmit}>
            {!props.edit?
                (<>
                    <input type={'text'} placeholder={'Add a todo'} value={input}
                           name={'text'} className={'todo-input'}
                           onChange={handleInputChange} />
                    <input type={'number'}  value={urgency}
                           min={1} max={5}
                           name={'urgency'}
                           onChange={handleUrgencyChange} />
                <button className={'todo-button'}>Add todo</button>
                </>) :
                (<>
                    <input type={'text'} placeholder={'Update a todo'} value={input}
                           name={'text'} className={'todo-input'}
                           onChange={handleInputChange} />
                    <input type={'number'}  value={urgency}
                           min={1} max={5}
                           name={'urgency'}
                           onChange={handleUrgencyChange} />
                <button className={'todo-button'}>Update todo</button>
                </>)
            }
        </form>
    );
}

export default TodoForm;
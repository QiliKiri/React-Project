import React, {useEffect, useState} from "react";

function ProgressBar(props) {
    const [complete, setComplete] = useState(props.numOfComplete);
    const [total, setTotal] = useState(props.numOfTasks);

    useEffect(() => {
        setComplete(props.numOfComplete);
        setTotal(props.numOfTasks);
    }, [props])

    return (
        <progress value={parseFloat(complete)} max={total}/>
    );
}

export default ProgressBar;
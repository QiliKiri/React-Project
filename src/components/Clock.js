import React, {useState, useEffect} from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        setTimeout(() => {
            setDate(new Date().toLocaleDateString());
        }, 1000 * 60 * 60 * 24);
    })

    return (
        <>
            <div>
                {time}
            </div>
            <div>
                {date}
            </div>
        </>
    )
}

export default Clock
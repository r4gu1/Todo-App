import React, { useState, useEffect } from 'react';

function Apps() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the timer on component unmount
        return () => clearInterval(timerID);
    }, []);

    const formattedTime = time.toLocaleTimeString(); // Format the time

    return (
        <div >
            <div className="bg-gray-800 text-white  rounded-md shadow-md w-42 text-center">
                <h2 className="text-lg font-bold">Time</h2>
                <p >{formattedTime}</p>
            </div>
        </div>
    );
}

export default Apps;

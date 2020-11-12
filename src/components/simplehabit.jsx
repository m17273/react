import React, { useCallback, useRef, useState } from 'react';

const Simplehabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    return (
        <li className = 'habit'>
            <span ref={spanRef} className='habit_name'>Reading</span>
            <span className='habit_count'>{count}</span>
            <button
                className='habit_button_increase'
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default Simplehabit;

import React, { useState, useEffect } from 'react'

const useLocalStorageState = () => {
    const [state, setState] = useState(
        () => localStorage.getItem('name') || ""
    );

    useEffect(() => {
        localStorage.setItem('name', state);
    }, [state]);

    return [state, setState];
}

const FunctionBaseComp = () => {

    const [name, setName] = useLocalStorageState('name');
    
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
            {name ? <p>Hello {name}</p> : "please enter the name"}
        </div>
    )
}

export default FunctionBaseComp;

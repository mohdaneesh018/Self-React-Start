import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(1);
    const [counter2, setCounter2] = useState(2);

    // No - Dependencies
    // useEffect(() => {                            // isme hr br state update hogi to har baar no-dependency render hogi browser pr
    //     console.log("Inside Effect");
    // })


    // Empty Dependencies
    // useEffect(() => {                           // isme sirf initially render hoa useEffect ka console phr bdme n hoga 
    //     console.log("Inside Effect");
    // }, [])  


    // Single Dependencies
    // useEffect(() => {                           // isme srf single dependency render hogi agr apn multiple bnayenge or usko render krenge wo n hogi 
    //     console.log("Inside Effect");
    // }, [counter]);


    // Multiple Dependencies
    useEffect(() => {                           // isme multiple dependency render hogi agr apn multiple bnayenge or usko render krenge wo render hogi 
        console.log("Inside Effect");
    }, [counter, counter2]);

    return (
        <div>
            <h2>Counter = {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increament</button>
            <h2>Counter2 = {counter2}</h2>
            <button onClick={() => setCounter2(counter2 + 1)}>Increament</button>
        </div >
    )
}

export default UseEffect

import React , { createContext, useContext, useState } from 'react';

const MyContext = createContext("defaultValue");

function Child({value}) {
    const text = useContext(MyContext);
    return <div>안녕하세요 ? {text} </div>
}

function Parent({ text }) {
    return <Child text={text} />
}

function GrandParent({ text }) {
    return <Parent text={text} /> 
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return (
    <MyContext.Provider value={value ? "GGG" : "bad"}>
        <GrandParent text="hello" />
        <button onClick={() => setValue(!value)}>버튼</button>
    </MyContext.Provider>
    )
}

export default ContextSample;
import { useReducer, useCallback } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE" :
            return (
                {...state, [action.name] : action.value}
            )
        case "RESET" :
                // return (
                //     { ...state = action.initialForm }
                // )
                return Object.keys(state).reduce((acc, current) => {
                    acc[current] = '';
                    return acc;
                }, {});
        default :
            throw(new Error("defaultError"))
    }
}

function useInputs(initialForm) {
    // const [form, setForm] =useState(initialForm);
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        // setForm(form => ({...form, [name] : value }));
        dispatch({
            type : "CHANGE",
            name,
            value,
        })
    }, []);
    // const reset = useCallback(() => setForm(initialForm), [initialForm]);
    const reset = useCallback(() => dispatch({
        type : "RESET",
    }),[])

    return [form, onChange, reset];
};

export default useInputs;
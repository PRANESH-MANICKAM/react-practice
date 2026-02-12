import { useState } from "react";
import useDebounce from "../../hooks/debounce";

const Input = () => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 2000);
    const handleInput = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    return (
        <>
            <h1>Input</h1>
            <input type="text" onChange={handleInput} value={value} />
            <p>{debouncedValue || "NA"}</p>
        </>
    );
};

export default Input;
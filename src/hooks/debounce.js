const { useState, useEffect } = require("react")

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay]);

    return debouncedValue
};

export default useDebounce;
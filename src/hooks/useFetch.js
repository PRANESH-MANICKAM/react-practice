import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("User Fetch Failed!")
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
    }

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, [url])

    return [loading, error, data];
}
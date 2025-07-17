import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const storedValue = localStorage.getItem(key);
    const initial = storedValue !== null ? storedValue : initialValue;

    const [value, setValue] = useState(initial);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue]
}

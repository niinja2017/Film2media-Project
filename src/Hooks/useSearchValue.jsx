import { useEffect, useState } from "react";


export default function UseSearchValue(value, delay) {
    const [debounceValue, setDebounceValue] = useState('')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [value])

    return debounceValue
}

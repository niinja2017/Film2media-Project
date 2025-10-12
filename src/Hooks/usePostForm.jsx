import { useState } from "react"

export default function usePostForm(initialValue){

    const [value , setValue] = useState(initialValue)

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange : changeHandler
    }
}

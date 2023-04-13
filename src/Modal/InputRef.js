import {useEffect, useRef} from "react";

const InputUsingRef = () => {

    const InputRef = useRef(null)
    useEffect(() => {
        InputRef.current = "hello world"
    })
    return (
        <div>
            <input/>
            <button onClick={() => console.log(InputRef)}>click me</button>
        </div>
    )
}
export default InputUsingRef
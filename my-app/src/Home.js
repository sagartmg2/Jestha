

// hook 

import { useState, useEffect } from "react";

export default function Home(props) {

    const [count, setCount] = useState(11);
    const [age, setAge] = useState(11);
    const [grade, setClass] = useState(11);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [state, setState] = useState({
        username: "john",
        password: ""
    });


    useEffect(() => {
        // COMPONENT DID MOUNT
        console.log("IINITIAL USE EFFECT");


        let mounted = true;

        // axios
        // api_call
        //     .then(res => {
        // if (mounted) {
        //     // setItems(res.data) ==> memory leak 
        //     //     })
        // }

        // clean up  // componentwillUnmount
        return () => {
            mounted = false
            //  logic to whether state update or not
        }


    }, [])
    // }, DEPENDECNY )

    useEffect(() => {
        console.log("inisde use effect")
        console.log({ count })

        // localStorage.setItem

    }, [count])


    useEffect(() => {


    })


    function increment() {
        setCount((prev) => {
            return prev + 1
        })

        setCount((prev) => {
            return prev + 1
        })

        console.log(count)

        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 2)
    }

    function handleChangeOld(e) {
        console.log(e.target.value)
        // 
        setState({
            username: e.target.value
        })
    }

    const handleChange = (e) => {
        console.log(e.target.name);
        // const name = e.target.name;
        // const value = e.target.value;

        const { name, value } = e.target
        //console.log(name,value);
        setState((prev) => {
            return ({ ...prev, [name]: value })
        })

        // obj = {a:1,b:2}
        // obj.a = 
        // obj["a"] = 

        // Object.

    };

    console.log("rendering...");

    // caculate4()

    return (
        <div>Home
            <h1>
                {count}
            </h1>

            <button onClick={increment}>increment</button>

            <form>
                <input value={state.username} name="username" onChange={handleChange} />
                <input value={state.password} name="password" onChange={handleChange} />

                {/* <input value={useranme} onChange={() => setUsername("e.asdfasdfasdfafdst.value")} /> */}
                {/* <input value={password} onChange={(e) => setPassword(e.target.value)} /> */}

            </form>

            {/* <Children username = {state.username}/> */}
        </div>
    )
}

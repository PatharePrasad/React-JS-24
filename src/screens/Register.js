import React, { useEffect, useState } from 'react'
import './Register.css'

function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState(13);



    function handleRegister(event) {
        event.preventDefault();
        console.log("Hello World")
    }

    function increaseAge(event) {
        event.preventDefault();
        setAge(age + 1);
    }

    useEffect(() => {
        console.log("age: ", age);
    }, [age]);

    return (

        <form>
            {age > 18 ? (
                <div>
                    <h1>{age}</h1>
                    <input className="form-input"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input className="form-input"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button onClick={handleRegister}>Submit</button>
                </div>
            ) : (<h1>You are not 18</h1>
            )}
            <button onClick={increaseAge}>Increase</button>
        </form >
    )
}

export default Register
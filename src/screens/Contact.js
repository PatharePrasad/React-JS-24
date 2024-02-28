import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CountContext } from "../context/CountContext";
import UserCard from "../components/UserCard";
import { incrementByAmount } from "../store/Reducer";

function Contact() {
    const value = useSelector(state => state.value);
    const { count, setCount } = useContext(CountContext);
    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <UserCard />
            <h1>Value: {value}</h1>
            <h1>ContextValue: {count}</h1>
            <button onClick={increment}>Increase count value</button>
            <button onClick={() => {
                dispatch(incrementByAmount(5));
                console.log("state updated!");
            }}>
                Increase Count By 5
            </button>
            <Link to="/Register">Link to Register Page</Link>
        </div>
    );
}

export default Contact;

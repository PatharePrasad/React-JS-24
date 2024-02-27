import React from "react";
import { Store } from "../store/Store";
import { incrementByAmount } from "../store/Reducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Contact() {

        const value = useSelector(state => state.value)

        return (
                <div>
                        <h1>{value}</h1>
                        <button onClick={() => {
                                Store.dispatch(incrementByAmount(5));
                                console.log("state updated!");
                        }}
                        >
                                Increase Count By 5
                        </button>
                        <Link to="/Register">Link to Register Page</Link>
                </div>
        );
}

export default Contact;
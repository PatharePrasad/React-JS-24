import React from 'react';
import UserCard from '../components/UserCard';
import data from '../utils/data';
import { Link, useNavigate } from 'react-router-dom';

function UserList() {
    const navigate = useNavigate();

    return (
        <div>
            {data.map(({ name, email, rollNo }) => (
                <UserCard key={rollNo} name={name} email={email} rollNo={rollNo} />
            ))}
            <button onClick={() => navigate("/Register")}>Take me to Register Screen</button>
        </div>
    );
}

export default UserList;

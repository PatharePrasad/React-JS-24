import React from 'react'
import UserCard from '../components/UserCard';
import data from '../utils/data';

function UserList() {
    return (
        <div>
            {data.map(({ name, email, rollNo }) => (
                <UserCard name={name} email={email} rollNo={rollNo} />
                
            )
            )})
        </div>

    );
}

export default UserList
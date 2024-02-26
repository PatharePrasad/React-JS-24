import React from 'react'
import Title from './Title'

function UserCard({name, email, rollNo}) {
    return (
        <div>
            <Title name={name} />
            <p>{email}</p>
            <p>{rollNo}</p>
        </div>
    )
};

export default UserCard
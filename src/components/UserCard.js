import React, { useContext } from 'react'
import Title from './Title'
import { CountContext } from '../context/CountContext'

function UserCard() {
    const { count } = useContext(CountContext);
    return (
        <div>
            <Title name={count} />
        </div>
    )
};

export default UserCard